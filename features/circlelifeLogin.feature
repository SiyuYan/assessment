Feature: Circle Life
  As a user of Circle Life
  I want to login with my account
  So that I can manage my account and view order information

@login
Scenario Outline: Login Circle Life
  Given a user open login page
  When login with users "<Email>" and "<PassWord>"
  Then login "<LoginResult>"
  Examples:
      | Email                  | PassWord   | LoginResult |
      | syyan@thoughtworks.com | 111111     |  failed     |
      | syyan@thoughtworks.com | 2739393ysy | successful  |
