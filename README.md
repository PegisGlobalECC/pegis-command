# Pegis Command

PEGIS GLOBAL

EXECUTIVE COMMAND CENTER — ECC

Product Requirements Document

Document Version: 2.0
Date: August 2026
Client: Pegis Global
Product: Executive Command Center
Industry: Oil & Gas Services
Delivery Partner: Khadasha Innovations Africa
Product Type: AI-Enabled Executive & Enterprise Operating System
Primary Platform: Responsive Web Application / Progressive Web App
Initial User Population: Approximately 4 ECC users + 14 managers + employees
Primary Brand Colours: #F75E17 and #1A3B90

1. Executive Summary

Pegis Global requires the design and implementation of an Executive Command Center — ECC, a centralised digital operating environment that gives senior leadership real-time visibility and control over the organisation.

The ECC is not intended to function as a conventional dashboard.

It will operate as an enterprise command and execution layer connecting executive activities, managers, employees and existing Pegis systems.

The platform will integrate:

Microsoft Outlook

Microsoft Teams

Google Calendar

Pegis ERP

QuickBooks

OneDrive / ERP document repository

AI services

Email

Notification services

WhatsApp notification gateway

while introducing new native functionality for:

Executive intelligence

Tasks

Delegation

Approvals

Decision management

Project management

Meeting intelligence

Relationship management

Travel

Reporting

KPI management

Operational visibility

The ECC should answer one fundamental question every time the executive opens the platform:

What do I need to know, decide, do and follow up on today?

The product must significantly reduce reliance on manual reminders, WhatsApp messages, email trails, spreadsheets and human memory.

2. Product Vision

To create a secure, intelligent and premium digital command environment that enables Pegis Global leadership to operate the business through visibility, prioritisation, accountability and exception management.

The ECC should become the executive's operating system for the organisation.

It should connect:

Information → Intelligence → Decision → Delegation → Execution → Follow-Up → Accountability → Reporting

3. Industry Context

Pegis Global operates within the oil and gas servicing industry.

The ECC must therefore reflect the realities of an operationally intensive organisation where executive decisions may affect:

Client delivery

Offshore operations

Onshore operations

HSE and safety

Personnel mobilisation

Procurement

Equipment availability

Asset deployment

Vendor performance

Project schedules

Contract obligations

Regulatory requirements

Financial commitments

Client relationships

Operational risk

The platform must feel designed for an oil and gas services organisation rather than being a generic corporate management application.

4. Core Business Problem

The executive is frequently outside the office and currently depends heavily on an Executive Assistant and other employees to manually communicate important information through channels including:

WhatsApp

Email

Microsoft Outlook

Microsoft Teams

Calls

Existing ERP systems

Personal reminders

This creates several operational risks.

4.1 Fragmented Executive Visibility

Important information exists across multiple applications.

There is currently no single environment showing:

What requires executive attention

What is urgent

What is overdue

What requires approval

What requires a decision

What should be followed up

What operational risks exist

Which projects are falling behind

4.2 Dependence on Manual Prompting

Meetings, approvals and follow-ups often rely on reminders from the Executive Assistant.

If the assistant is busy or a reminder is missed, an important action could be delayed.

4.3 Unstructured Delegation

Tasks are frequently delegated through email trails.

This makes it difficult to answer:

Who owns the activity?

What is the deadline?

Has it been completed?

What evidence exists?

Who should follow up?

What is overdue?

4.4 Weak Executive Prioritisation

Priorities are largely communicated verbally or over WhatsApp.

There is no structured business-impact-based priority engine.

4.5 Fragmented Institutional Memory

Important decisions, discussions, approvals and commitments may exist across:

Emails

Meeting minutes

ERP records

WhatsApp conversations

Documents

Individual memory

ECC should create a searchable organisational memory.

5. Product North Star

The Five-Minute Executive Test

Within five minutes of opening the Executive Portal, the executive must be able to determine:

What is happening today?

What requires my immediate attention?

What approvals are waiting?

What decisions must I make?

What is overdue?

Which projects are at risk?

What financial matters require attention?

Who must I follow up with?

What travel or operational activity is upcoming?

What could negatively affect the company if I do nothing?

6. Product Goals

ECC must:

G1 — Centralise Executive Intelligence

Provide one operating view of important organisational information.

G2 — Reduce Operational Leakage

Reduce missed meetings, forgotten follow-ups, overdue approvals and incomplete delegations.

G3 — Improve Decision Velocity

Put decisions and approvals in front of the correct executive at the correct time.

G4 — Strengthen Accountability

Every delegated action must have an accountable owner and visible status.

G5 — Build Institutional Memory

Create searchable records of decisions, actions, meetings and supporting context.

G6 — Improve Operational Risk Awareness

Automatically surface projects, payments, deadlines and operational activities that could negatively affect the business.

G7 — Improve Management Execution

Managers must be able to manage their departments without requiring full access to the Executive Portal.

G8 — Protect Sensitive Business Information

Financial, strategic and executive information must be access-controlled.

7. ECC Platform Architecture

ECC will contain four major portals.

PORTAL 1

IT PORTAL

The administrative backend and technical control centre.

PORTAL 2

EXECUTIVE PORTAL

The strategic command environment for senior leadership.

PORTAL 3

MANAGERS PORTAL

The departmental execution and management environment.

PORTAL 4

EMPLOYEES PORTAL

The simplified execution environment for employees.

8. Portal Relationship

                         ┌─────────────────┐
                         │    IT PORTAL    │
                         │ Administration  │
                         │ Security        │
                         │ Integrations    │
                         └────────┬────────┘
                                  │
                                  │ controls
                                  ▼
              ┌───────────────────────────────────┐
              │       EXECUTIVE PORTAL            │
              │ Intelligence • Decisions          │
              │ Approvals • Oversight             │
              └──────────────┬────────────────────┘
                             │
                       oversight
                             │
                             ▼
              ┌───────────────────────────────────┐
              │        MANAGERS PORTAL            │
              │ Department • Projects • Tasks     │
              │ Approvals • Team Performance      │
              └──────────────┬────────────────────┘
                             │
                         delegates
                             │
                             ▼
              ┌───────────────────────────────────┐
              │       EMPLOYEES PORTAL            │
              │ Tasks • Updates • Requests        │
              │ Evidence • Notifications          │
              └───────────────────────────────────┘


9. Portal 1 — IT Portal

Purpose

The IT Portal acts as the administrative and technical backend of ECC.

It is not intended for routine executive management.

It provides authorised administrators with control over:

Users

Roles

Permissions

Departments

Integrations

Workflows

Security

Audit logs

System configuration

AI configuration

Notification rules

10. IT Portal Dashboard

The dashboard should display:

System Health

ECC operational status

API status

Integration status

Failed synchronisations

Background job health

AI service health

Notification service health

Users

Total users

Active users

Suspended users

Pending invitations

Login activity

Integrations

Cards for:

Outlook

Microsoft Teams

Google Calendar

ERP

QuickBooks

OneDrive

Email

WhatsApp gateway

Each card should show:

Connected

Disconnected

Degraded

Last sync

Error state

11. IT Portal — User Management

Administrators can:

Create users

Invite users

Suspend users

Reactivate users

Assign portal access

Assign roles

Assign departments

Assign permissions

Reset access

Review login history

Review account status

User profiles should include:

Full name

Employee ID

Position

Department

Email

Phone

Manager

Portal

Role

Status

Permission set

Last login

12. Role & Permission Management

Permissions must be configurable.

Possible actions:

View

Create

Edit

Delete

Assign

Approve

Reject

Export

Administer

Audit

Possible resource categories:

Financial

Projects

Employees

Decisions

Approvals

CRM

Assets

Safety

Travel

Documents

Reports

Administration

13. Permission Hierarchy

Access should follow:

User → Portal → Role → Permission → Resource → Record

Example:

An Asset Manager may:

Access Managers Portal

See Assets

See assigned projects

See asset-related tasks

but may not:

See executive financial decisions

Change approval workflows

Access company-wide payroll information

14. IT Portal — Department Management

Initial departments may include:

Executive Office

Operations

Projects

HR

Finance

Business Development

Procurement

HSE

Assets

IT

Administration

Marketing

Department structure must remain configurable.

15. IT Portal — Integration Management

Administrators should be able to:

Connect integrations

Re-authorise integrations

View sync status

Trigger permitted manual syncs

Review errors

Configure sync frequency

Disable integration

View last successful sync

16. IT Portal — Approval Workflow Configuration

Administrators can configure workflows such as:

Employee → Line Manager → General Manager → Executive

Different approval types may have different routing logic.

Example:

Leave

Employee → Manager → HR

Large Payment

Finance → Manager → GM → Executive

Recruitment

HR → Department Manager → Executive

Procurement

Requester → Line Manager → Procurement → Finance → Executive

17. IT Portal — Audit & Security

Administrators should be able to review:

Login attempts

User activity

Permission changes

Approval activity

Decision modifications

Record deletion

Sensitive exports

Integration changes

Administrative actions

Audit records must be immutable to ordinary administrators unless a separately defined audit-supervisor role permits exceptional actions.

18. Portal 2 — Executive Portal

Purpose

The Executive Portal is the command environment.

Its goal is not to display every organisational record.

Its goal is to surface what requires executive awareness or intervention.

19. Executive Portal Homepage

The homepage should provide the Daily Executive Command View.

20. Executive Welcome Header

Display:

Good Morning, Engineer

or the executive's configured preferred name/title.

Below:

Here is what requires your attention today.

Header contains:

Date

Current time

Search

Notifications

AI Assistant

Quick Create

Profile

21. Executive Dashboard — Primary Summary

Prominently display:

Today's Meetings

Number of meetings + next meeting.

Pending Approvals

Priority-ranked.

Decisions Required

Open decisions requiring executive intervention.

Overdue Actions

Tasks or commitments overdue.

Financial Watch

Important incoming/outgoing payment issues.

Project Risks

Projects requiring executive attention.

22. Executive Priority Feed

This should be one of the most important parts of ECC.

Example:

Requires Your Attention

Critical

Mobilisation Approval — Offshore Project

₦XX payment requires final executive approval.

Why this is critical

Delay may affect mobilisation scheduled for Monday.

Actions:

Review Approval

High

Chevron Contract Renewal

No recorded client interaction in 31 days.

Contract expires in 21 days.

Action:

Review Relationship

High

Project Alpha

Milestone delayed by 7 days.

Primary dependency:

Equipment availability.

Action:

View Project

23. AI Priority Prediction

ECC should rank executive attention items using factors including:

Business impact

Operational impact

Financial exposure

Safety impact

Client impact

Regulatory impact

Deadline proximity

Project dependency

Duration overdue

Executive importance

Escalation level

24. Explainable AI

Whenever AI assigns an important priority, ECC should explain why.

Example:

Why this is high priority

Project mobilisation is scheduled within 48 hours and procurement approval remains outstanding.

This is essential to building executive trust in the AI.

25. Executive Daily Brief

ECC should automatically generate a daily intelligence summary.

Sections:

Today's Schedule

Meetings, events and travel.

Top Priorities

Recommended 3–5 executive priorities.

Needs Your Attention

Approvals, payments, documents and deadlines.

Decisions Required

Pending strategic/operational decisions.

Operational Watch

Important operational issues.

Project Risks

At-risk/off-track projects.

Financial Watch

Receivables, payables and exceptions.

Relationship Follow-Ups

Important client or stakeholder relationships.

Travel

Upcoming itinerary.

KPI Snapshot

Organisation performance.

26. Top Executive Information Categories

The executive dashboard must support the agreed priority categories:

Pending MOUs/contracts awaiting signature

Client/prospect follow-ups

Expected incoming payments

Payments due

Financial summaries relating to strategic clients

Upcoming meetings

Documents requiring review/signature

Travel

Priority-ranked approvals

Business decisions

KPIs

Operational risks

Project risks

27. Intelligent Calendar

ECC will integrate with:

Microsoft Outlook Calendar

Google Calendar

Existing calendars remain systems of record.

ECC becomes the intelligence and command layer.

28. Calendar Capabilities

Users may:

View day

View week

View month

Open meetings

Reschedule

View attendees

Add preparation notes

Attach contextual records

Configure reminders

29. Calendar Conflict Intelligence

ECC should detect:

Meeting overlaps

Travel conflicts

Insufficient travel time

Double booking

Executive unavailable

High-priority task overlapping meeting

Meeting scheduled near important operational deadline

30. Email Intelligence

ECC must integrate with Microsoft Outlook.

It should not simply duplicate the Outlook inbox.

Instead, AI should categorise messages into executive-relevant groups.

Action Required

Emails requiring an action.

Important

High-impact communication.

Delegated

Items that may need to become tasks.

FYI

Information that may be relevant but does not require immediate action.

Follow-Up

Messages awaiting response.

31. Meeting Management

Meetings may continue through:

Microsoft Teams

Zoom, where subsequently supported

Other connected meeting systems

ECC maintains:

Meeting context

Preparation

Notes

Transcripts

Decisions

Tasks

Follow-ups

32. Meeting Brief

Before an important meeting, ECC should surface:

Meeting purpose

Attendees

Organisation

Contact history

Previous meetings

Open actions

Related project

Related contract

Outstanding payment

Documents

Previous decisions

Suggested talking points

33. AI Meeting Agent

Where Microsoft/third-party APIs permit, the ECC meeting intelligence capability should:

Capture transcript

Identify speakers where supported

Summarise discussion

Extract decisions

Identify action items

Recommend task owners

Recommend deadlines

Identify follow-ups

34. AI Task Confirmation

AI must not silently assign tasks.

Example:

Suggested Actions

Send revised proposal to Chevron

Suggested Owner: Commercial Manager
Suggested Due Date: Friday

Actions:

Create Task

Edit

Dismiss

35. Executive Task Management

The executive can:

Create

Delegate

Edit

Reassign

Prioritise

Escalate

Follow up

Close

Review evidence

Tasks should support:

Task

Owner

Department

Project

Priority

Due date

Status

Dependencies

Comments

Attachments

Evidence

Follow-up date

Created by

Completion date

Escalation status

36. Executive Delegation Monitoring

Provide views such as:

Delegated by Me

Due Today

Awaiting Update

Overdue

Blocked

Recently Completed

Requires My Intervention

The objective is to eliminate the need for the executive to manually ask:

Has this been done?

37. Approval Command Center

The executive sees a consolidated approval queue.

Approval categories:

Payments

Procurement

Leave

Expenses

Recruitment

Contracts

Proposals

Budgets

Other configurable categories

38. Approval Card

Each approval should show:

Request

Requester

Department

Amount where relevant

Date requested

Time waiting

Previous approvers

Supporting documents

Priority

AI risk/context summary

Actions:

Approve

Reject

Return

Request Information

39. Decision Register

Every important executive decision should become an institutional record.

Fields:

Decision ID

Title

Category

Date

Decision

Context

Rationale

Decision maker

Owner

Department

Related project

Related meeting

Related contract/document

Financial impact

Operational impact

Confidentiality

Status

40. Oil & Gas Decision Categories

Initial categories should include:

Procurement

Projects

Offshore Operations

Onshore Operations

HSE / Safety

Finance

HR

Commercial

Mobilisation

Assets

Contracts

Strategy

Regulatory / Compliance

41. Decision Security

Financial and strategic decisions may be designated:

Executive Confidential

Only the Engineer and specifically authorised users can access them.

42. Financial Executive View

ECC should not replace QuickBooks.

It should provide executive-level financial intelligence.

43. Financial Summary

Potential cards:

Receivables

Total expected.

Overdue Receivables

Outstanding beyond agreed date.

Payables

Upcoming payments.

Payments Awaiting Approval

Executive actions.

Project Financial Exposure

Projects with significant financial risk.

44. Strategic Client Financial View

The executive should be able to select a major client such as:

Chevron

and see authorised information including:

Open contracts

Active projects

Outstanding receivables

Recent payments

Pending deliverables

Meetings

Relationship history

Tasks

Documents

Decisions

45. Project Executive View

Executives should see the portfolio by exception.

Example:

ProjectClientStatusProgressBudgetSpendDeadlineRiskProject AChevronAt Risk67%———EquipmentProject BTotalEnergiesOn Track82%———Low

46. Oil & Gas Project Risk Categories

Project risks may include:

HSE

Personnel

Equipment

Procurement

Vendor

Client

Financial

Regulatory

Weather

Offshore logistics

Mobilisation

Transportation

Documentation

Contract

Schedule

47. Executive KPI View

KPI categories should initially cover:

Commercial

Revenue

Pipeline

New opportunities

Client retention

Contract value

Projects

Active projects

On-track

At-risk

Off-track

Delayed milestones

Finance

Receivables

Expenses

Payables

Cash exposure

People

Workforce

Open vacancies

Absence

Employee issues

Operations

Active mobilisation

Equipment availability

Operational exceptions

HSE exceptions

48. Travel Management

The executive travel module should consolidate:

Destination

Country

Trip dates

Flight

Airline

Booking

Hotel

Driver

Transportation

Meetings

Contacts

Documents

Travel reminders

49. Executive Universal Search

A persistent search should provide one point of discovery.

Example:

Chevron

Search results may surface:

Client

Chevron

Projects

Chevron Offshore Support Project

Meetings

Chevron Business Review — 9 August

Documents

Chevron Framework Agreement

Tasks

Submit Mobilisation Plan

Approvals

Equipment Procurement

Decisions

Mobilisation approval

Results must remain permission-aware.

50. AI Document Search

Users should be able to ask:

Summarise the Chevron contract.

When does the contract expire?

What are Pegis Global's obligations?

What action items came from our last Chevron meeting?

What payment is outstanding?

AI must answer only from authorised information.

51. CRM & Relationship Intelligence

Contacts must be separated into:

External

Clients

Prospects

Partners

Vendors

Regulators

Board members

Consultants

Internal

Employees

Managers

Executives

52. Relationship Profile

Store:

Name

Organisation

Position

Email

Phone

Relationship owner

Last interaction

Next follow-up

Active projects

Opportunities

Documents

Meetings

Tasks

Notes

53. Relationship Alerts

Example:

Relationship Watch

Chevron

No recorded engagement in 70 days.

Open opportunity: Contract Renewal

Suggested action:

Schedule Follow-Up

Thresholds should be configurable.

54. Portal 3 — Managers Portal

Purpose

Managers Portal is the management execution environment.

Approximately 14 managers may initially access this portal.

Managers should manage their department and assigned activities without seeing unnecessary executive information.

55. Managers Dashboard

Header:

Good Morning, [First Name]

Here is what requires your attention today.

Display:

My Department

High-level department health.

My Tasks

Tasks assigned to manager.

Team Tasks

Team workload.

Pending Approvals

Requests requiring manager action.

Overdue

Department activities overdue.

Projects

Department-related projects.

Risks

Open risks/escalations.

Team Performance

Relevant indicators.

56. Manager Task View

Managers can:

Create tasks

Delegate to employees

Update tasks

Review employee updates

Request evidence

Reassign where permitted

Escalate

Complete

Add comments

Managers should see only teams within their permitted organisational scope.

57. Department Views

Managers may see:

Department dashboard

Department KPIs

Department employees

Department tasks

Department projects

Department requests

Department approvals

Department documents

58. Manager Approval Responsibilities

Depending on workflow, managers can:

Approve

Reject

Return

Request information

Examples:

Employee Leave → Manager

Procurement Request → Manager → Procurement → Finance → Executive

Expense → Manager → Finance

59. Manager Project Management

Managers should be able to manage projects they own.

Project record:

Project

Client

Manager

Team

Scope

Start date

Deadline

Status

Progress

Budget

Spend

Milestones

Risks

Issues

Tasks

Documents

Decisions

Latest update

60. Project Milestones

Each milestone:

Title

Owner

Planned date

Actual date

Status

Dependencies

Evidence

Risk

Statuses:

Not Started

In Progress

Completed

Delayed

Blocked

61. Project Health

Possible classifications:

On Track

No material issues.

At Risk

Potential issue requiring management attention.

Off Track

Confirmed issue materially affecting delivery.

On Hold

Temporarily suspended.

Completed

Project successfully concluded.

62. Manager Escalation to Executive

Managers can escalate:

Project issues

Approval issues

Client concerns

HSE concerns

Resource constraints

Financial exposures

Critical tasks

Escalated items should surface automatically in the Executive Portal.

63. Portal 4 — Employees Portal

Purpose

Employees Portal is intentionally simpler.

It exists primarily to enable execution and accountability.

Employees should not have access to unnecessary executive intelligence.

64. Employee Homepage

Display:

Good Morning, [First Name]

My Tasks

Due Today

Upcoming

Overdue

Awaiting Input

My Requests

Notifications

65. Employee Task Record

Employee sees:

Task title

Description

Manager

Priority

Due date

Related project

Attachments

Comments

Required evidence

Employee can:

Start task

Update status

Add comment

Upload evidence

Flag blocker

Submit completion

66. Employee Requests

Employees may submit configured requests including:

Leave

Expenses

Procurement

Recruitment request

Administrative request

Requests are automatically routed according to workflow configuration.

67. Blocker Escalation

Employees should be able to mark:

I am blocked

and provide:

Reason

Support required

Comment

Evidence

The manager should receive notification.

68. Project Management Module

Unlike several other functions, project management will be native to ECC.

ECC should not rely entirely on the existing ERP project management capability.

The system should, however, integrate relevant ERP project information where appropriate.

69. Project Record Structure

Each project should support:

Overview

Project name

Project ID

Client

Project manager

Executive sponsor

Department

Project type

Timeline

Start

End

Duration

Progress

Percentage complete

Current stage

Status

Commercial

Contract value

Budget

Spend

Financial exposure

Subject to permissions.

Delivery

Milestones

Deliverables

Dependencies

Risk

Risk register

HSE risk

Operational risk

Resources

Personnel

Vendors

Assets/equipment

Documentation

Contracts

Reports

Correspondence

70. HSE & Operational Awareness

Because Pegis Global operates in oil and gas services, ECC should support high-level visibility into operational and HSE issues associated with projects.

Phase 1 need not become a full HSE management system.

However, project records should support:

HSE risk

Incident flag

Safety concern

Operational restriction

Compliance issue

Critical HSE flags should be capable of escalation to executives.

71. Asset Awareness

Where asset information is available through ERP or assigned modules, ECC may show:

Asset

Category

Location

Assigned project

Availability

Operational status

Maintenance status

The Assets representative may receive scoped access.

72. Project Mobilisation

Oil and gas projects may require mobilisation tracking.

Project teams should eventually be able to capture:

Personnel mobilisation

Equipment mobilisation

Travel/logistics

Approval readiness

Documentation readiness

Client readiness

Phase 1 implementation depth should be confirmed during detailed project workshops.

73. Reporting Hub

ECC should support automated and on-demand reports.

74. Daily Executive Brief

Generated daily.

75. Project Report

Contains:

Executive summary

Progress

Milestones

Financial summary

Risks

Issues

Decisions

Next actions

76. KPI / Business Performance Report

Contains agreed KPIs by:

Company

Department

Subsidiary

Project

where data exists.

77. End-of-Day Executive Report

Recommended future/Phase 1.1 feature.

Sections:

Completed today

Outstanding

New escalations

Approvals completed

Decisions made

Delegated activities

Project changes

Tomorrow's priorities

78. AI Executive Assistant

A persistent AI assistant should allow authorised users to interact conversationally with ECC.

Examples:

What requires my attention today?

What is overdue?

Which approvals could delay operations?

Which projects are currently at risk?

What payments are expected this week?

What did I decide about Project Alpha?

Who have I not followed up with?

Summarise the last meeting with Chevron.

Which projects have HSE issues?

79. AI Guardrails

AI must:

Respect permissions

Identify its sources where practical

Distinguish recommendations from facts

Allow human override

Avoid silently executing sensitive actions

Avoid inventing unavailable information

80. Notifications Architecture

Channels:

In-App

Primary.

Email

Operational alerts.

WhatsApp

Notification only.

No confidential business content should be sent over WhatsApp.

Example:

You have a high-priority item requiring attention in ECC.

Button/deep-link:

Open ECC

81. Notification Rules

Potential events:

Task assigned

Task due soon

Task overdue

Meeting upcoming

Approval waiting

Approval escalated

Decision required

Payment due

Receivable overdue

Client follow-up due

Project risk

HSE escalation

Document review

Travel reminder

Integration failure

82. Integrations

PlatformECC PurposeMicrosoft OutlookEmail + CalendarMicrosoft TeamsMeetings + meeting intelligenceGoogle CalendarCalendarPegis ERPCRM, HR, projects, assets, documentsQuickBooksFinancial intelligenceOneDriveLegacy/current document accessAI ProviderIntelligence and summarisationWhatsApp ProviderNotification-only alerts

83. Data Ownership Philosophy

ECC should not indiscriminately duplicate information.

Where another system is authoritative:

Source System → ECC Intelligence Layer

Examples:

QuickBooks remains accounting system of record.

Outlook remains email system of record.

ERP remains relevant system of record for applicable business functions.

ECC provides:

Intelligence

Workflow

Visibility

Prioritisation

Action

84. Security Architecture

Security must be foundational.

Requirements:

Authentication

Role-based access

Record-level authorisation where required

Encryption in transit

Encryption at rest

Audit logging

Secure session management

Least-privilege access

API security

Secret management

Secure integrations

Rate limiting

Backup/recovery

MFA-ready architecture

85. Data Sensitivity Levels

General Internal

Routine authorised business information.

Confidential

Restricted departmental/company information.

Executive Confidential

Executive-level strategy and decisions.

Financial Restricted

Sensitive financial records.

HSE / Operational Restricted

Sensitive safety or operational information where applicable.

86. Design Direction

Overall Design Philosophy

ECC should feel:

Premium

Modern

Executive

Calm

Intelligent

Structured

Industrially credible

High trust

Sophisticated

It must not feel like:

A generic admin template

A colourful startup SaaS dashboard

A conventional ERP interface

A dense spreadsheet replacement

87. Premium Visual Language

The visual experience should combine:

Executive luxury + enterprise technology + oil & gas operational confidence.

Use:

Generous whitespace

Large content margins

Soft elevation

Sophisticated typography

Subtle motion

Strong hierarchy

Clean data visualisation

Large executive summary cards

Progressive disclosure

88. Primary Brand Palette

Pegis Orange

#F75E17

Pegis Blue

#1A3B90

These colours should not dominate every screen at full saturation.

They become brand anchors.

89. Pastel Orange System

Create softer variants of orange for executive interfaces.

Suggested palette:

Orange 500

#F75E17

Primary accent.

Orange 200

#F7B48D

Orange 100

#FCE0D0

Orange 50

#FFF3EC

Use Orange 50/100 for:

Attention backgrounds

Soft highlights

Selected states

Executive alerts

Use full orange sparingly.

90. Pastel Blue System

Suggested palette:

Blue 700

#1A3B90

Primary Pegis blue.

Blue 300

#8096CD

Blue 200

#B4C0E1

Blue 100

#DAE1F3

Blue 50

#F1F4FB

Use Blue 50–200 for:

Cards

Background accents

Secondary selected states

Information panels

91. Neutral Palette

The premium experience should primarily use neutrals.

Suggested:

Background

Warm off-white / near-white.

Examples:

#FAFAF8

or

#FCFCFB

Cards

White.

Primary Text

Deep charcoal.

Secondary Text

Soft slate grey.

Borders

Very light neutral grey.

Avoid excessive heavy dark outlines.

92. Semantic Colours

The application still requires semantic state colours independent of Pegis branding.

Use tasteful muted shades for:

Success

Warning

Error

Information

Statuses must not rely exclusively on colour.

93. Oil & Gas Visual Inspiration

Visual motifs may subtly reference:

Technical schematics

Industrial infrastructure

Offshore operations

Energy

Engineering

Precision instrumentation

Operational control rooms

Avoid stereotypical imagery such as excessive oil rigs throughout the interface.

The visual language should communicate engineering precision, not decoration.

94. Card Design

Cards should generally use:

Rounded corners

Soft shadow/elevation

Light borders

Comfortable padding

Limited information density

Priority cards may use:

Soft pastel orange background

Thin orange accent line

Information cards may use:

Pastel blue background

95. Executive Dashboard Density

The dashboard must support significant information without creating visual overload.

Use:

Layer 1

Executive summary.

Layer 2

Requires attention.

Layer 3

Schedule, approvals and risks.

Layer 4

KPIs and operational intelligence.

Detailed records remain behind drill-down.

96. Navigation

Desktop:

Premium vertical sidebar.

Recommended Executive Portal navigation:

Home

Calendar

Tasks

Meetings

Approvals

Decisions

Projects

Finance

Relationships

Documents

Travel

Reports

Utilities:

Search

Notifications

AI Assistant

Profile

97. Responsive Strategy

The application must work on:

Desktop

Laptop

Tablet

Mobile

Executive Portal requires particular optimisation for mobile use because the executive may frequently operate outside the office.

98. PWA Requirements

The Phase 1 web platform should be installable as a PWA where supported.

It should provide:

App-like launch experience

Responsive layout

Device home-screen installation

Optimised loading

Secure sessions

Offline capability may be limited based on security and integration constraints.

99. Search Architecture

Search must eventually span:

Contacts

Projects

Meetings

Tasks

Decisions

Documents

Approvals

Clients

Financial records

Email metadata/content where permitted

Results must always honour access control.

100. Non-Functional Requirements

Performance

Dashboard target:

Approximately ≤3 seconds under normal supported operating conditions after optimisation.

Availability

Initial production target:

≥99.5%, excluding planned maintenance and external service outages.

Scalability

Architecture must support:

More executives

More managers

More employees

Subsidiaries

Additional integrations

More workflows

without product redesign.

101. Browser Support

Current supported releases of:

Chrome

Microsoft Edge

Safari

Firefox

102. Accessibility

Support:

Appropriate colour contrast

Keyboard navigation

Screen-readable labels

Large touch targets

Accessible status indicators

Clear focus states

Human-readable errors

103. Error Handling

ECC should never appear broken simply because one external service is unavailable.

Example:

QuickBooks is temporarily unavailable. Financial data was last updated at 10:42 AM.

The remainder of the Executive Dashboard should continue functioning.

104. Sync Visibility

Integrated records should display sync state where useful.

Examples:

Last updated 10:42 AM

Sync delayed

Connection unavailable

This prevents executives from assuming stale information is current.

105. Phase 1 Priority Classification

P0 — Core

Must be available for successful initial rollout.

Authentication

IT Portal

Executive Portal

Managers Portal

Employees Portal

RBAC

User management

Executive Dashboard

Executive Daily Brief

Calendar integrations

Tasks

Delegation

Employee task management

Approvals

Decision Register

Meeting management

Core AI meeting intelligence

Project management

Financial overview

CRM/contacts

Travel

Notifications

Audit trail

Required integration foundation

106. P1 — High Priority

Outlook email intelligence

Universal search

Document AI

Advanced relationship intelligence

Project risk intelligence

KPI reporting

Executive AI Assistant

Enhanced project financial insights

Reporting Hub

107. P2 — Product Evolution

Potential subsequent functionality:

Native mobile applications

Advanced asset management

Full HSE workflows

Procurement workflow expansion

Mobilisation management

Equipment readiness management

Advanced predictive analytics

Voice interface

AI autonomous meeting attendance

Advanced expense management

Board reporting

Executive productivity analytics

Cross-subsidiary intelligence

108. Phase 1 Out of Scope Unless Separately Approved

Replacement of Pegis ERP

Replacement of QuickBooks

Full accounting functionality

Full HRIS

Full HSE management suite

Native mobile applications

Autonomous payments

Autonomous executive approvals

Autonomous contract commitments

Unrestricted WhatsApp business messaging

109. Core User Journeys

Executive Morning Journey

Login

↓

Executive Daily Brief

↓

Review priorities

↓

Check meetings

↓

Review approvals

↓

Make decisions

↓

Delegate actions

↓

Review risks

↓

Begin day

110. Delegation Journey

Executive

↓

Creates Task

↓

Assigns Manager/Employee

↓

Notification

↓

Manager/Employee Portal

↓

Task Update

↓

Evidence

↓

Completion

↓

Executive Visibility

111. Approval Journey

Employee

↓

Submits Request

↓

Line Manager

↓

General Manager

↓

Executive

↓

Approve / Reject / Return

↓

Requester Notification

↓

Audit History

112. Meeting Journey

Calendar Meeting

↓

ECC Synchronisation

↓

Meeting Brief

↓

Meeting

↓

AI Transcript

↓

Summary

↓

Decisions

↓

Action Items

↓

Human Confirmation

↓

Tasks

↓

Follow-Up

113. Project Escalation Journey

Project update

↓

Risk identified

↓

Manager receives alert

↓

Manager assesses

↓

Critical risk escalated

↓

Executive Dashboard

↓

Executive decision/action

↓

Decision and activity recorded

114. Information Hierarchy Principle

The same underlying information may appear differently depending on the portal.

Example:

Employee

Complete equipment inventory update by Friday.

Manager

3 of 8 asset inventory tasks incomplete.

Executive

Asset readiness is at risk for Monday mobilisation.

IT

Records and workflows are functioning normally.

This principle is essential.

ECC should transform information according to the user's responsibility rather than simply display the same database records to everyone.

115. Product Success Measures

Suggested post-launch measurements:

Reduction in missed executive activities

Reduction in manually prompted follow-ups

Percentage of delegated tasks tracked through ECC

Percentage of approvals completed in ECC

Approval turnaround time

Percentage of executive decisions captured

Manager adoption rate

Employee task completion rate

Percentage of risks escalated before deadline

Daily Executive Brief usage

Executive portal active days

AI recommendation acceptance/override rate

Search usage

Integration reliability

116. Product Definition of Done

A feature is not complete because its screen exists.

It is complete when:

Functional requirements are implemented

RBAC is enforced server-side

Responsive state works

Loading state exists

Empty state exists

Error state exists

Audit requirements are satisfied

Notifications work

Integration failures are handled

QA passes

Acceptance criteria pass

Security checks pass

Product Owner approves

117. Final Product Principle

The ECC must become the operational nervous system connecting the executive office with the rest of Pegis Global.

The hierarchy is:

IT Portal

Controls the platform.

↓

Executive Portal

Understands, prioritises, decides and commands.

↓

Managers Portal

Coordinates, manages and escalates.

↓

Employees Portal

Executes and reports.

The product should ultimately allow Pegis Global leadership to operate through:

KNOW

Understand what is happening.

↓

PRIORITISE

Know what matters.

↓

DECIDE

Make informed decisions.

↓

DELEGATE

Assign responsibility.

↓

EXECUTE

Enable teams to act.

↓

TRACK

Know whether work is progressing.

↓

ESCALATE

Surface exceptions before they become failures.

↓

LEARN

Maintain organisational intelligence and institutional memory.

118. ECC Product North Star

The Executive Command Center should ensure that the right information reaches the right person, at the right level of detail, at the right time — with a clear understanding of what action should happen next.

For the Engineer, this means:

“I should not have to remember everything happening across Pegis Global. ECC should know what requires my attention and bring it to me.”

One architectural principle in this revision is particularly important for the build: the four portals should not be treated as four separate applications or four independent databases. They should sit on one ECC platform, shared data model and authentication layer, with portal access determined by RBAC. That will make it possible for an employee's task update to become a manager-level exception and ultimately an executive-level risk without copying records between systems.

I would also strongly recommend making the Executive Portal visually different in density from the Managers and Employees portals. The executive interface should be extremely curated and premium; managers can have more operational detail, while employees should have the simplest interface of all. This will make ECC feel like a genuine command system rather than the same ERP screen shown to different users.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ecfd10d4-9d4d-4d84-815f-b5391399faa2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
