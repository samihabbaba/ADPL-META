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
        agree: new FormControl(false),
    });
    constructor(private fb: FormBuilder, private toastr: ToastrService) {}

    ngOnInit(): void {}

    onSubmit() {
        if (this.form.valid) {
            const form = this.form.getRawValue();
            this.formValid = true;
            Email.send({
                Host: 'smtp.elasticemail.com',
                Username: 'adplmeta@gmail.com',
                Password: 'FA356E64CA6A9C0D33BD9D4F76EAE2536676',
                To: 'adplmeta@gmail.com',
                From: 'adplmeta@gmail.com',
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
