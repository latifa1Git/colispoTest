Feature: see announcement

    Background:
        Given I Login the application
    Scenario: See Announcement
        When I navigate to the announcement page
        Then I see the announcement