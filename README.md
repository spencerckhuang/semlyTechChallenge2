# Semester.ly Spring 2023 Technical Challenge

## Preface

Please watch the [introduction video](https://youtu.be/w1qGKIwpLFs), or read the following transcript.

### Introduction

Hello and welcome to the Semester.ly Spring 2023 technical challenge. My name is James
and I'll be your team lead for this semester. I'm a senior comp sci major and I've been
working on Semester.ly since my sophomore spring. This is my second semester leading the
team and my second time hiring prospective students to join our team. If you've been
using the site, then you'll know that we most recently completed dark mode, which
involved a lot of refactoring of the codebase behind the scenes, and I would say our
codebase is a lot healthier now as a result, which is a good thing for you all.

### Team Culture

Before we get started with the challenge, I'd like to give you a glimpse into how I've
been running Semester.ly so you know whether you want to do the technical challenge or
not, as it'll probably be a non-trivial task for most of you.

First of all, Semester.ly is not a company anymore; we are a student group funded by
the JHU IT department. We aren't for-profit or anything like that, and the IT department
also doesn't have a lot of expectations for us, meaning for the most part, we develop as
we please. Recently Dr. Madooei has been keeping up with our development and giving his
advice on what we should be working on, but it's still mostly us deciding what we do.

That means in terms of work schedule, I also don't have strict deadlines, and rather
pretty much leave it up to you to complete your work as you can. We do what I would call
soft deadlines, in which we try to get some work done every week before our weekly
meeting. Furthermore, I try not to "assign" tasks to you, rather I usually lay out the
things that we have to do and ask you to choose something to do. In the end, I
only want you to work on Semester.ly if you want to, since you log your own hours anyways.

As for the current team, we have 3 active members right now, and the cap on the
size of our team is 8, which is enforced by the JHU IT department. Two of us are
software developers and one is a UI/UX designer. Our plans for the semester are to
decide on what to work on after hiring new members, but we are currently working on
increasing the site speed when it comes to searching, adding, and deleting courses.

If the team does not seem like a good fit for you, then I would suggest not doing the
challenge to save us both some time, but if does then try your best on the challenge.

### Challenge

As you are a potential member of Semester.ly, we would like to
see how proficient you are with our tech stack and programming in general.

The aim is for the challenge to be able to be completed in one sitting of 2-3 hours
for someone familiar with the tech stack, or to teach you the basics of
the stack if you are unfamiliar with it.

We have given you more time to learn and brush up previous skills in hopes of
replicating more realistic working conditions; hopefully you find this to be more fair
and indicative of your ability to contribute as a team member as well.

Please do not worry if you are unfamiliar with the topics tested in this assessment. We
assess not only your existing knowledge of our tech stack, but also your ability to
ask questions, learn, and otherwise communicate with us. Let me stress just one point,
please don't be afraid to ask for help if you find yourself stuck, asking for help is a
normal part of development. Don't worry if you're unable to finish the challenge,
because we'll also take into consideration the level that you're starting at. That's all
for this introduction, and I hope to talk with you throughout the challenge.

## Assessment

The following criteria are tested by the challenge itself:

1. TypeScript
1. React functional components
1. React-Redux hooks
1. Redux Toolkit
1. Django REST APIs

Furthermore, please take note of the following statements:

1. You will be assessed on _everything_ we can observe from you working on this task.
1. You should have access to a pull request (PR) created automatically when you accepted
   this assessment. Please use that as your main means of communication with us
   regarding the challenge.
1. If you need to ask for help, use the #challenge-help channel in our
   [Discord](https://discord.gg/784jgyAxUH) if it is applicable to everyone, otherwise
   use the PR. You may message us on Discord for other concerns.
1. Pretend you are already a member of the team and this is a task you have accepted
   to do. During this assessment, treat us as your team members as part of Semester.ly
   and we will do the same to you.
1. When you believe you have completed all of the tasks, message us on the PR and we
   will give you a code review. It is expected that you discuss or implement changes
   if we ask you to do so.
1. The technical assessment starts on Monday 1/30 at 12:00am and will end on Monday 2/6 at
   11:59pm.

## The Challenge

Your task is to complete a basic course cart application. Here is the [full
wireframe](https://www.figma.com/file/biSrldPxl8VS1KbtUdIiAc/Semester.ly-Spring-2023-Technical-Challenge-Wireframe?node-id=0%3A1&t=zqp1yfBvH3DkJVVs-1)
and [prototype
(interactive)](https://www.figma.com/proto/biSrldPxl8VS1KbtUdIiAc/Semester.ly-Spring-2023-Technical-Challenge-Wireframe?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2).

You are given an existing site that lists all of the courses you've already added;
however, you must implement the functionality for adding and deleting courses from the
cart according to the wireframe.

In particular, please try to complete the following:

1. Clicking on a course in the "My Courses" list shows that course as selected.
1. Clicking on the "Add" button and filling in the form to create a new course
   successfully adds a course and saves it in the server.
1. There is form validation when adding a course, namely, a course code should match the
   format "XX.000.000" and credits should be a decimal number and only be in increments
   of 0.5.
1. Deleting a course removes the course from the "My Courses" list and stays that way
   after a refresh.

We ask you to also continue any existing conventions in the codebase (e.g, using
TypeScript, React-Redux). In each of the frontend and backend directories, you will find
another README that steps you through the existing codebase in order to help with the
challenge.

Please use your own judgment on what else you may need to add or modify in order to
complete the app. We may also ask you to add to or change your implementation in our
code review. However, if something remains unclear, please ask for help in the
#challenge-help channel of our [Discord](https://discord.gg/6ZMAyuz3AW).

We look forward to working with you on this challenge. Good luck!
