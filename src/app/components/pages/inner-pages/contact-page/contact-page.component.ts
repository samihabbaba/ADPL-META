import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import './../../../../../assets/js/smtp.js';
declare let Email: any;

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
    formValid: boolean = true;
    form: FormGroup = this.fb.group({
        fullName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required]),
        subject: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required]),
        // agree: new FormControl(false),
    });
    constructor(private fb: FormBuilder, private toastr: ToastrService) {}

    ngOnInit(): void {}

    onSubmit() {
        console.log(this.form)
        if (this.form.valid) {
            const form = this.form.getRawValue();
            this.formValid = true;
            Email.send({
                Host: 'smtp.elasticemail.com',
                Username: 'sami@iasyougo.com',
                Password: 'C20AC0EB10CE23FE1557655E6643D5CE616F',
                To: 'sami@iasyougo.com',
                From: 'sami@iasyougo.com',
                Subject: form.subject,
                Body: `<b>Full Name: </b>${form.fullName} <br /> <b>Email: </b>${form.email}<br /> <b>Phone: </b>${form.phone}<br /> <b>Message:</b> <br /> ${form.message} <br><br> <b>~End of Message.~</b> `,
            }).then((message: any) => {
                this.toastr.success('We will get back to you.', 'Thanks!', {
                    positionClass: 'toast-bottom-left',
                    timeOut: 2500,
                });
                this.form.reset();
            });
        } else {
            this.formValid = false;
            this.toastr.error('Fill the form.', 'Error', {
                positionClass: 'toast-bottom-left',
                timeOut: 2500,
            });
        }
    }
}
