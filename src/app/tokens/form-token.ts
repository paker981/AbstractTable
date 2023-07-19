import { InjectionToken } from '@angular/core';
import { Form } from '@angular/forms';


// Zdefiniowanie tokena wstrzykiwania
export const FORM_TOKEN = new InjectionToken<Form>('formToken');