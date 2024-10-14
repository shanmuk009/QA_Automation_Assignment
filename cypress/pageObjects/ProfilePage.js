
class ProfilePage {
    resumeHeadingAfterdelete = "70% of recruiters discover candidates through their resume"
    resumename = "Shanmuka_QA_Resume_OCT2024.pdf"
    upload_file_selector = "input[type='file']#attachCV"
    resume_name_selector = ".resume-name-inline>div"
    delete_icon_selector = "i[data-title='delete-resume']"
    confirm_del_btn_selector = "div[class='lightbox model_open flipOpen'] button[class='btn-dark-ot']"
    upload_resume_selector = "input[type='file']#fileUpload"
    resume_heading_selector = ".attachCV>div>div:nth-child(2)>.subHeadinfo"

    updateResume() {
        cy.get(this.upload_file_selector).attachFile(this.resumename, { force: true })
    }
    deleteResume() {

        cy.get("input[type='button']").its('length').then((length) => {
            if (length == 4) {
                cy.get(this.delete_icon_selector).click({ force: true })
                cy.get(this.confirm_del_btn_selector).click()

                cy.get(this.resume_heading_selector).should('have.text', this.resumeHeadingAfterdelete)


            }
        })
    }
    uploadResume() {

        cy.get("input[type='button']").its('length').then((length) => {
            if (length == 4) {
                this.deleteResume()
                this.updateResume()

            } else {
                this.updateResume()
            }
        })


    }

    validateUpdatedResumeName() {
        cy.get(this.resume_name_selector).should('have.text', this.resumename)
    }
}

export default new ProfilePage();