import { Page, Locator, expect } from '@playwright/test';

export class patientsPage {
  private readonly page: Page;
  private readonly mumbailocationbtn: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly maleRadio: Locator;
  private readonly ageInput: Locator;
  private readonly specializationSelect: Locator;
  private readonly symptomsInput: Locator;
  private readonly doctorSelect: Locator;
  private readonly appointmentDateInput: Locator;
  private readonly appointmentTimeSelect: Locator;
  private readonly urgentCheckbox: Locator;
  private readonly firstTimeVisitorCheckbox: Locator;
  private readonly sendReminderCheckbox: Locator;
  private readonly termsLabel: Locator;
  private readonly acceptTermsCheckbox: Locator;
  private readonly submitButton: Locator;
  private readonly logoutButton: Locator;
  private readonly searchDoctor: Locator
  private readonly drp_all_specialization: Locator
  private readonly eles_view_profile: Locator

  constructor(page: Page) {
    this.page = page;
    this.mumbailocationbtn = page.getByTestId('location-button-mumbai');
    this.firstNameInput = page.getByTestId('input-first-name');
    this.lastNameInput = page.getByTestId('input-last-name');
    this.maleRadio = page.getByTestId('radio-gender-male');
    this.ageInput = page.getByTestId('input-age');
    this.specializationSelect = page.getByTestId('select-specialization');
    this.symptomsInput = page.getByTestId('input-symptoms');
    this.doctorSelect = page.getByTestId('select-doctor');
    this.appointmentDateInput = page.getByTestId('input-appointment-date');
    this.appointmentTimeSelect = page.getByTestId('select-appointment-time');
    this.urgentCheckbox = page.getByTestId('checkbox-urgent-appointment');
    this.firstTimeVisitorCheckbox = page.getByTestId('checkbox-first-time-visitor');
    this.sendReminderCheckbox = page.getByTestId('checkbox-send-reminder');
    this.termsLabel = page.locator('label').filter({ hasText: 'I agree to terms /' });
    this.acceptTermsCheckbox = page.getByTestId('checkbox-accept-terms');
    this.submitButton = page.getByTestId('booking-submit-button');
    this.logoutButton = page.getByTestId('patient-logout-button');
    this.searchDoctor = page.getByTestId("search-tab-button");
    this.drp_all_specialization = page.getByTestId("specialization-filter")
    this.eles_view_profile = page.getByTestId("//button[contains(@id,'view-profile-button-')]") 

  }

  public async func_get_doctor_profile_url(specialization_value: string): Promise<string>{
    await this.searchDoctor.click()
    await this.drp_all_specialization.selectOption(specialization_value)

    const [newPage]= await Promise.all([
      await this.page.context().waitForEvent('page'),
      await this.eles_view_profile.first().click()

    ])

    await newPage.waitForLoadState()
      const url_value = newPage.url()
      newPage.close()
      return url_value

  }

  public async selectHospitalLocation(location_value: string){
    const select_location_value = this.page.getByTestId('location-button-"+{location_value.toLowerCase()}')location_value+");
  }
    

    public async selectMumbaiLocation(){

    //await this.mumbailocationbtn.click();
    await this.selectHospitalLocation(details location.toLowercase){

    }
  }

  public async fillPatientDetails(firstName: string, lastName: string, age: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.maleRadio.check();
    await this.ageInput.fill(age);
  }

  public async selectMedicalDetails(specialization: string, symptoms: string, doctor: string) {
    await this.specializationSelect.selectOption(specialization);
    await this.symptomsInput.fill(symptoms);
    await this.doctorSelect.selectOption(doctor);
  }

  public async scheduleAppointment(date: string, time: string) {
    await this.appointmentDateInput.fill(date);
    await this.appointmentTimeSelect.selectOption(time);
  }

  public async acceptTermsAndSubmit() {
    await this.urgentCheckbox.check();
    await this.firstTimeVisitorCheckbox.check();
    await this.sendReminderCheckbox.check();
    await this.acceptTermsCheckbox.check();
    await this.submitButton.click();
  }

  public async verifyBookingSuccessful() {
    await expect(this.logoutButton).toBeVisible();
  }
}
