# ghos3

Ghost theme for Summer School of Science web

## Contents

1. [Webiste administration](#website-administration)
    1. [Login](#login)
    1. [Page templates](#page-templates)
    1. [Required tags](#required-tags)
1. [Theme development](#theme-development)
    1. [Environment setup](#environment-setup)
        1. [Installing Ghost](#installing-ghost)
        1. [LiveReload](#livereload)
    1. [Hardcoded content](#hardcoded-content)

## Website administration

### Login

When added to the staff members of S3, you will receive an email with details on how to setup your Ghost account. After registration, go to [s3.drustvo-evo.hr/ghost/](https://s3.drustvo-evo.hr/ghost/) and log in with your credentials and proceed to account settings, set up your account image and short bio.

### Page templates

For pages with custom elements, like [Program](https://s3.drustvo-evo.hr/program/) and [FAQ](https://s3.drustvo-evo.hr/faq/), there are custom templates selectable in Ghost backend (sidebar in edit page view). Templates [`custom-program.hbs`](#custom-programhbs), [`custom-faq.hbs`](#custom-faqhbs) and [`custom-contact.hbs`](#custom-contacthbs) are meant to be used only for specific pages and should never be manually selected from the dropdown menu, unlike [`custom-camp.hbs`](#custom-camphbs) which needs to be selected when creating new subpages for upcoming camps.

#### custom-program.hbs

#### custom-camp.hbs

#### custom-faq.hbs

#### custom-contact.hbs

### Required tags

camp-YYYY
Project
Project-Astronomy
Project-Bioinformatics
Project-Biology
Project-Chemistry
Project-ComputerScience
Project-Microbiology
Project-Physics
Workshop
Lecture
FAQ
FAQ-Applications
FAQ-FeesAndFinances
FAQ-PracticalInformation
FAQ-ProjectsAndLectures
FAQ-Volunteering
Recommendation

## Theme development

### Environment setup

#### Installing Ghost

#### LiveReload

### Hardcoded content
