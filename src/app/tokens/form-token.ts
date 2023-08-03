import { InjectionToken } from '@angular/core';
import { Form } from '@angular/forms';
import { FormFactory } from '../interfaces/form.interface';


// Zdefiniowanie tokena wstrzykiwania
export const FORM_FACTORY = new InjectionToken<FormFactory>('formFactory');