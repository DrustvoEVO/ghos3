# ghos3

Ghost theme for Summer School of Science web

## Contents

1. [Webiste administration](#website-administration)
    1. [Login](#login)
    1. [Templates](#templates)
        1. [Page templates](#page-templates)
        1. [Post templates](#post-templates)
    1. [Required tags](#required-tags)
1. [Theme development](#theme-development)
    1. [Environment setup](#environment-setup)
        1. [Installing Ghost](#installing-ghost)
        1. [LiveReload](#livereload)
    1. [Hardcoded content](#hardcoded-content)

## Website administration

### Login

When added to the staff members of S3, you will receive an email with details on how to setup your Ghost account. After registration, go to [s3.drustvo-evo.hr/ghost/](https://s3.drustvo-evo.hr/ghost/) and log in with your credentials and proceed to account settings, set up your account image and short bio.

### Templates

#### Page templates

For pages with custom elements, like [Program](https://s3.drustvo-evo.hr/program/), [FAQ](https://s3.drustvo-evo.hr/faq/) and [Contact](https://s3.drustvo-evo.hr/contact/) there are custom page templates that are automatically applied based on the `page-:slug.hbs` file. However, when multiple pages use the same template, like Camps, it must be selected in Ghost backend, from a dropdown in sidebar when creating or editing a page. The dropdown lists all templates based on `custom-:template.hbs` files.

##### `page-program.hbs`

##### `page-faq.hbs`

##### `page-contact.hbs`

##### `custom-camp.hbs`

#### Post templates

Currently not in use, planned from version 2.X.X.

##### `custom-project.hbs`

##### `custom-workshop.hbs`

##### `custom-lecture.hbs`

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
