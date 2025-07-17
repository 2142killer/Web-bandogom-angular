import { Component, inject } from '@angular/core';
import { AuthFormComponent } from "../../components/auth-form/auth-form.component";
import { AuthService, user } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService = inject(AuthService);
  toast = inject(HotToastService);
  router = inject(Router);

handleSubmit(values: user) {
  this.authService.registerUser(values).subscribe({
    next: () => {
      this.toast.success('Done');
      this.router.navigateByUrl('/');
    },
    error: () => {
      this.toast.error('Error');
    }
  });
}

}

