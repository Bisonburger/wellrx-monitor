Feature: Searching for drug locations
  As a WellRx user who is not signed in
  I want to search for a drug for a given location

  Scenario Outline:  Search with a valid address
    When I search for "<drug>" at location "<address>"
    Then I should not see an error message

    Examples:
    |drug|address|
    |LOSARTAN POTASSIUM|85749|
    |LIPITOR|17756|

  Scenario Outline:  Search with an invalid drug name
    When I search for "<drug>" at location "<address>"
    Then I should see an error message

    Examples:
    |drug|address|
    |I M NOT A DRUG|85749|
    |L|17756|
    |LO|17756|

  Scenario Outline:  Search with an invalid address
    When I search for "<drug>" at location "<address>"
    Then I should see an error message

    Examples:
    |drug|address|
    |LOSARTAN POTASSIUM|1|
    |LIPITOR|INVALID|
