import LoginPage from '../../../pageObjects/LoginPage';
import HomePage from '../../../pageObjects/HomePage';
import ProfilePage from '../../../pageObjects/ProfilePage';
import JobsPage from '../../../pageObjects/JobsPage';

describe("Automate Naukri Login and Update Profile details", () => {

    before("clear cookies before test", () => {
        cy.clearCookies();
        cy.clearLocalStorage();
    })
    it.only('Login to Naukri,delete and update the resume, and Logout from Account', () => {

        LoginPage.logIn();
        HomePage.validateUserTitle();
        HomePage.clickOnViewProfile();
        ProfilePage.deleteResume()
        ProfilePage.uploadResume();
        ProfilePage.validateUpdatedResumeName();
        HomePage.logout();

    })

    it("Login to Naukri,go to Jobs and Apply",()=>{
        LoginPage.logIn();
        HomePage.selectMenuItem("Jobs");
        JobsPage.selectTabInJobs('profile');
        //JobsPage.selectJobArticleWithRequiredExp("2");
    })



})