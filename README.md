## Usage

```
1. Go to Our Website, Circles.Life and list down your observations.
2. Write basic test cases/ test scenarios for the same website.
3. Write the script for, Login in to website. Verify your email address under My account.
4. Write a script to login into Facebook account (test account) from website. And Post a test comment.
5. Now, write a script to check the same posted comment by logging into Facebook App. And verify the same comment is posted or not.

* - code must be submitted to git (GitHub, GitLab, Bitbucket)
* - PageObject pattern should be used.
```

## 1. Observations
### Business

Circles.Life is a digital telecommunications operator, and site slogan is "The Best No-contract Mobile Plan".

* It has Integrated with some social network contact and have good google ranking result.
* For the visitor user, they could get several preferential information and sale plan from home page.
They could select proper planning and input delivery information when they decide to buy one.
* For the logged user, they could view the order info and manage the account.

### Technical

* The web site is responsive design and the break points are 1024px and 768px.
* It implement a lot of google analytics to track user behavior information such like the "INSIDER" event and some page tracking.
* There are search engine optimisation work like meta tag with description,canonical link and og tags. 

(By the way I just found that is the homepage canonical link error? Seems this link can't reached. https://www.pages.circles.life/home)

## 2. Test Scenarios and test cases

List the major function test cases at Circles.Life homepage. Each case need to consider different responsive design with above 1024px and below 768px and 768px-1024px.

I will only list one detail test case below. 

### Test Scenarios of Visitor

Test Scenario: Validate home page function

* Test Case 1: 20% off fixed Shop referral in the top of site
    ```
    Given one visitor user open Circles.Life home page
    When he/she click 20% off fixed Shop referral in the top of site
    Then he/she will view the Best No-contract Mobile Plan page with info correctly
    ```
* Test Case 2: Bug now newsletter section: Buy Plan only page and plan plus phone page
* Test Case 3: No contract plan section/3-unlimited-data page/terms and condition
* Test Case 4: Some news paper and Circles.Life 4 advantages
* Test Case 5: Help input search and online talk
* Test Case 6: Quiz: Why not sign up for Circle.Life yet?
* Test Case 7: Email subscription with promo code

Test Scenario: Validate header menu function

* Test Case 1: Logo: Home page
* Test Case 2: Plan Only: No-Contact Plan page.
* Test Case 3: Plan with phone: Plan with phone page
* Test Case 4: Roaming: Roaming page
* Test Case 5: Porting: Porting page
* Test Case 6: Why us: About Us page
* Test Case 7: Help: Help page
* Test Case 8: Buy: Buy Plan page

Test Scenario: Validate footer menu function
* Test Case 1: Login: Login page
* Test Case 2: CirclesCare App: App page.
* Test Case 3: Roadshows
* Test Case 4: Partnerships
* Test Case 5: Bonus Data
* Test Case 6: About Us
* Test Case 7: Careers
* Test Case 8: CIS Corporate Discounts:Corporate
* Test Case 9: Terms and Conditions
* Test Case 10: Privacy
* Test Case 11: Contact Us
* Test Case 12: Track My Order
* Test Case 13: Billing
* Test Case 14: Lost SIM
* Test Case 15: FAQ
* Test Case 16: Social network: facebook, twitter,instagram,linkein

### Test Scenarios of Logged in

Test Scenario: Validate signup function
* Test Case 1: With Facebook
* Test Case 2: With Google
* Test Case 3: With email address

Test Scenario: Validate login function
* Test Case 1: With Facebook
* Test Case 2: With Google
* Test Case 3: With email address
* Test Case 4: forget password

Test Scenario: Validate function after logged in
* Test Case 1: My orders
* Test Case 2: My account
* Test Case 3: Logged out

## 3. Execution command

* Login for Circles.Life and validate address value
* Login for Facebook and post one comment


```
npm i

npm run e2e (run with headless chrome desktop view and generate reporter)
npm run e2e:firefox (run with firefox desktop view)

```