Feature: User Login

  Scenario: User can login 
    Given I visit the login page
    When I enter valid credentials
    Then I should see the dashboard

  Scenario: User cannot login with invalid credentials  
    Given I visit the login page
    When I enter invalid credentials
    Then I should see an error message

