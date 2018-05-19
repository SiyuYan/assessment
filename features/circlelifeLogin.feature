Feature: Circle Life
  As a user of Circle Life
  I want to login with my account
  So that I can manage my account and view order information

  @circle-life
  Scenario Outline: Login Circle Life
    Given a user open "<website>" login page
    When login with users "<Email>" and "<PassWord>"
    Then login "<LoginResult>"
    When select my account on "<website>"
    Then validate email address "<Email>"
    Examples:
      | website    | Email                  | PassWord   | LoginResult |
 #    | circleLife | syyan@thoughtworks.com | 111111     |  failed     |
      | circleLife | syyan@thoughtworks.com | 2739393ysy | successful  |
