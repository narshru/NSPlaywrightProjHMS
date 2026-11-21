import { test } from '@playwright/test';
import {HmsLoginpage} from '../page/loginpage';
import { patientsPage } from '../page/patients_page';
import { playwrightUtils } from '../utils/playwright_utils';

test('should successfully book a medical appointment', async ({ page }) => {
  const login_obj = new HmsLoginpage(page)
  const appointmentPage = new patientsPage(page);
  const playwright_utils_obj = new playwrightUtils (page);
  


  await login_obj.func_naviateTo('https://automatetesting-platform.com/')
  await login_obj.func_loginpage('miaaviPatient' , 'miaaviPassword')

  await appointmentPage.selectMumbaiLocation();

  await appointmentPage.fillPatientDetails('playwright', 'akarapu', '44');
  
  await appointmentPage.selectMedicalDetails('Cardiology', 'hfhdsfgdfufglgf', 'Dr Sneha Rao');
  
  await appointmentPage.scheduleAppointment('2026-11-05', '10:30');
  
  await appointmentPage.acceptTermsAndSubmit();
  
  await appointmentPage.verifyBookingSuccessful();
  await playwright_utils_obj.func_logout()

  test("Get url of view doctor view profile", async({page})=>{
    const login_page_obj = new HmsLoginpage(page)
    const patients_page_obj = new patientsPage(page);

    await login_page_obj.func_naviateTo("https://automatetesting-platform.com/")
    await login_page_obj.func_loginpage("miaaviPatient ", "miaaviPassword ")

  })

});



