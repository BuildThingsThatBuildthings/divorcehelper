# Divorce Roadmap Build Workflow

This document explains how to use the specialized subagents to build the comprehensive A-Z divorce roadmap.

## Available Subagents

All subagents are located in `.claude/agents/`:

1. **safety-crisis** - Safety planning, domestic violence, crisis management
2. **legal-navigator** - Divorce process, procedures, jurisdictional guidance
3. **document-evidence** - Document collection, evidence preservation, spoliation prevention
4. **financial-forensics** - Asset inventory, dissipation detection, budgets, support calculations
5. **coparenting** - Parenting plans, best interests, custody, UCCJEA
6. **negotiation-settlement** - Settlement strategy, BATNA/WATNA, mediation prep
7. **court-compliance** - Deadline tracking, order compliance, post-decree tasks
8. **tax-benefits** - Filing status, dependency claims, alimony tax rules, COBRA
9. **wellbeing-logistics** - Mental health resources, housing, insurance, credit management

## Roadmap Structure

Create these files in `Roadmap/` folder:

### Core Process Stages (11 files)

1. `01-safety-stabilization-days-0-7.md`
2. `02-resolution-track-selection.md`
3. `03-prefiling-prep-weeks-1-3.md`
4. `04-filing-and-service.md`
5. `05-temporary-orders-30-90-days.md`
6. `06-financial-disclosures-discovery.md`
7. `07-parenting-plan-development.md`
8. `08-property-division.md`
9. `09-support-determination.md`
10. `10-settlement-or-trial.md`
11. `11-judgment-and-postdecree.md`

### Protection & Strategy Guides (7 files)

12. `strategies-protect-yourself-and-kids.md`
13. `what-other-person-might-do.md`
14. `allowed-vs-not-allowed.md`
15. `dividing-things-fairly.md`
16. `settlement-strategies.md`
17. `what-never-to-do.md`
18. `first-10-moves-today.md`

## How to Build Each File

### Stage 1: Safety & Stabilization (Days 0-7)
**File:** `Roadmap/01-safety-stabilization-days-0-7.md`

**Invoke Subagent:**
```
@safety-crisis

You are writing Stage 1 of the comprehensive divorce roadmap. This is an educational guide (not personalized advice) explaining what people should expect and prepare for during the first critical week when divorce is starting.

Write a complete guide covering:

1. **Overview** - What this stage looks like, why Days 0-7 are critical
2. **What to Expect** - Common emotional responses, immediate concerns, typical challenges
3. **Immediate Actions Checklist** - Prioritized todo list:
   - Safety assessment
   - Go-bag preparation
   - Digital hygiene (passwords, 2FA)
   - Document gathering
   - Crisis contacts
4. **Documents You Need Now** - What to secure immediately if safely accessible
5. **Red Flags & Risks** - Warning signs requiring immediate help:
   - Domestic violence indicators
   - Financial control/abuse
   - Relocation threats
   - Technology surveillance
   - Escalating conflict
6. **What Your Partner Might Do** - Common tactics:
   - Cutting off financial access
   - Monitoring communications
   - Using children as leverage
   - Making threats
7. **Safety Planning Components**:
   - Home safety
   - Work/school safety
   - Digital safety
   - Financial safety
   - Child safety
8. **Crisis Resources** - Hotlines, DV resources, emergency contacts
9. **Common Mistakes to Avoid** - What NOT to do in first week
10. **When to Move to Next Stage** - Signs you're ready for Stage 2

Use factual, educational, empowering tone. Include specific actionable steps.
```

---

### Stage 2: Resolution Track Selection
**File:** `Roadmap/02-resolution-track-selection.md`

**Invoke Subagent:**
```
@legal-navigator

You are writing Stage 2 of the comprehensive divorce roadmap. This educational guide helps people understand how to choose between mediation, collaborative divorce, and litigation.

Write a complete guide covering:

1. **Overview** - What this decision means, when it's typically made
2. **The Three Resolution Tracks**:
   - **Mediation** - How it works, pros/cons, best for whom, costs, timeline
   - **Collaborative Divorce** - Team approach, pros/cons, best for whom, costs, disqualification
   - **Litigation** - Court-driven process, pros/cons, when necessary, costs, timeline
3. **Decision Framework** - How to choose based on:
   - Conflict level
   - Safety concerns
   - Financial complexity
   - Cooperation level
   - Need for discovery
4. **What to Expect from Each Track** - Detailed walkthrough
5. **Red Flags** - When one track is wrong choice (e.g., mediation with DV)
6. **Costs Comparison** - Typical costs and timelines for each
7. **Changing Tracks** - Can you switch? What happens?
8. **Checklist** - Questions to answer before choosing
9. **When to Move to Next Stage** - After track selection, ready for Stage 3

Educational tone, help readers make informed decision.
```

---

### Stage 3: Pre-Filing Prep (Weeks 1-3)
**File:** `Roadmap/03-prefiling-prep-weeks-1-3.md`

**Invoke Two Subagents:**

**First invoke:**
```
@document-evidence

You are writing the document collection section of Stage 3 (Pre-Filing Prep) for the divorce roadmap. This is an educational guide about what documents to gather before filing.

Write a comprehensive section covering:

1. **Document Sweep Overview** - Why 12-36 months of records matter
2. **Complete Document Checklist** organized by category:
   - Identity & Personal
   - Financial - Income (pay stubs, tax returns, W-2s, business records)
   - Financial - Bank & Credit (statements, crypto, loans, credit reports)
   - Financial - Assets (real estate, vehicles, retirement, insurance, collectibles)
   - Financial - Debts (credit cards, loans, medical bills, tax liabilities)
   - Children (school, health, activities, custody-relevant)
   - Housing & Utilities
   - Communications & Evidence (texts, emails, social media)
   - Legal & Court (prior orders, police reports, prenups)
3. **How to Gather Safely** - Lawful access only, what you CAN and CANNOT access
4. **Organization System** - How to organize once collected
5. **Evidence Preservation** - Spoliation warning, what must be preserved
6. **Red Flags** - Signs partner is hiding/destroying documents
7. **Timeline** - How long gathering takes, what's urgent

Educational, thorough checklist approach.
```

**Then invoke:**
```
@financial-forensics

You are writing the financial preparation section of Stage 3 (Pre-Filing Prep) for the divorce roadmap. This builds on the document collection section.

Write a comprehensive section covering:

1. **Credit & Identity Protection**:
   - Pull credit reports from all 3 bureaus
   - Review for unknown accounts/debts
   - Consider fraud alert or credit freeze
   - Set up monitoring
2. **Budget Creation**:
   - Current marital budget (all expenses)
   - Post-separation budget for each party
   - Shortfall analysis (can two households be sustained?)
   - Why budgets matter for support calculations
3. **Asset Inventory** - Preliminary list:
   - Real property
   - Vehicles
   - Financial accounts
   - Retirement accounts (note QDRO requirements)
   - Business interests
   - Personal property
4. **Debt Inventory** - All marital debts
5. **Red Flags for Dissipation**:
   - Large cash withdrawals
   - Transfers to third parties
   - Unusual spending patterns
   - Business manipulation
6. **Initial Characterization** - Start thinking marital vs separate
7. **Professional Needs** - When to hire forensic accountant, appraiser, business valuator

Practical, action-oriented educational content.
```

**Combine both outputs into Stage 3 file**

---

### Stage 4: Filing & Service
**File:** `Roadmap/04-filing-and-service.md`

**Invoke Subagent:**
```
@legal-navigator

You are writing Stage 4 (Filing & Service) of the divorce roadmap. This educational guide explains how divorce cases are initiated.

Write a complete guide covering:

1. **Overview** - What filing means, what service means
2. **Filing the Petition**:
   - What is a petition/complaint
   - Where to file (venue, jurisdiction)
   - Required forms (varies by state)
   - Filing fees
   - What happens when filed
3. **Service of Process**:
   - What is service
   - Methods (personal service, certified mail, publication)
   - Who can serve (not you)
   - Proof of service
   - Timeline requirements
4. **Automatic Temporary Restraining Orders (ATROs)**:
   - What are ATROs (California example, Fam. Code §2040)
   - When they take effect (upon service in CA)
   - What they prohibit:
     * Moving children out of state
     * Dissipating assets
     * Changing insurance beneficiaries
     * Major financial changes
   - What's still allowed (ordinary expenses, attorney fees)
   - Other states' versions
5. **Respondent's Options**:
   - Response deadline (typically 20-30 days)
   - Default if no response
   - Requesting extensions
6. **What to Expect Next** - Temporary orders process
7. **Jurisdictional Variations** - How procedures differ by state
8. **Red Flags**:
   - Can't locate spouse for service
   - Partner becomes hostile/dangerous after service
   - ATRO violations by partner
9. **Checklist** - Todo items for this stage
10. **When to Move to Next Stage** - After response filed or default entered

Educational, procedural guidance tone.
```

---

### Stage 5: Temporary Orders (30-90 days)
**File:** `Roadmap/05-temporary-orders-30-90-days.md`

**Invoke Two Subagents:**

**First invoke:**
```
@court-compliance

You are writing the court orders section of Stage 5 (Temporary Orders) for the divorce roadmap. This educational guide explains what temporary orders are and how to comply.

Write a comprehensive section covering:

1. **What Are Temporary Orders**:
   - Purpose (maintain status quo during divorce)
   - Duration (until final judgment)
   - Types of temporary orders
2. **Common Temporary Orders**:
   - Temporary custody/parenting schedule
   - Temporary child support
   - Temporary spousal support
   - Exclusive use of home/vehicle
   - Status quo financial orders
   - Payment of bills/debts
3. **How Temporary Orders Are Obtained**:
   - Request for Order (RFO) process
   - Ex parte vs noticed motions
   - Hearing process
   - Timeline
4. **Understanding Your Order**:
   - How to read order
   - What "SHALL" and "IS ORDERED" mean
   - What you MUST do
   - What you MUST NOT do
   - Deadlines
5. **Compliance is Critical**:
   - Why strict compliance matters
   - Documenting your compliance
   - Consequences of violations (contempt)
6. **If You Can't Comply** - Request modification, don't ignore
7. **If Other Party Doesn't Comply**:
   - Document violations
   - Enforcement options
   - Don't self-help (withhold support/time)
8. **Red Flags**:
   - Partner violating orders
   - You're unclear about requirements
   - Orders are impossible to follow

Educational, emphasize importance of compliance.
```

**Then invoke:**
```
@coparenting

You are writing the temporary parenting section of Stage 5 (Temporary Orders) for the divorce roadmap. This focuses on temporary custody/parenting arrangements.

Write a comprehensive section covering:

1. **Temporary Custody vs Final Custody** - How they differ, does temp affect final
2. **What Temporary Parenting Orders Cover**:
   - Physical custody (where child lives)
   - Legal custody (who decides major issues)
   - Parenting schedule
   - Exchange logistics
   - Holiday schedule
3. **Best Interests Apply Even Temporarily** - Factors courts consider
4. **Status Quo Often Governs** - Why current arrangement matters
5. **Creating Workable Temporary Schedule**:
   - Age-appropriate considerations
   - School/activity considerations
   - Work schedule considerations
6. **Exchange Guidelines**:
   - Being on time
   - Neutral locations if needed
   - Child-focused transitions
7. **Communication During This Phase**:
   - BINF principles (Brief, Informative, Neutral, Firm)
   - Written communication methods
   - Co-parenting apps
8. **Red Flags**:
   - Partner denying parenting time
   - Partner making unilateral decisions
   - Child's resistance or distress
   - Safety concerns
9. **Documenting** - Keep calendar, notes of compliance
10. **Checklist** - Todo items for temporary parenting stage

Educational, child-focused tone.
```

**Combine both outputs into Stage 5 file**

---

### Stage 6: Financial Disclosures & Discovery
**File:** `Roadmap/06-financial-disclosures-discovery.md`

**Invoke Two Subagents:**

**First invoke:**
```
@document-evidence

You are writing the financial disclosure section of Stage 6 for the divorce roadmap. This educational guide explains mandatory disclosure obligations.

Write a comprehensive section covering:

1. **Mandatory Financial Disclosures Overview**:
   - What they are
   - Why required
   - Timeline (typically 60-90 days)
   - Penalties for non-compliance
2. **What Must Be Disclosed**:
   - Complete financial affidavit/declaration
   - All income documentation
   - All asset documentation
   - All debt documentation
   - Current valuations
   - Retirement account statements
   - Tax returns (typically 3 years)
3. **Duty of Complete Honesty**:
   - Must be accurate and complete
   - Sanctions for hiding assets
   - Credibility damage
   - Potential perjury
4. **Formal Discovery Process**:
   - Interrogatories (written questions)
   - Requests for Production (documents)
   - Requests for Admission
   - Depositions
   - Subpoenas
   - Timeline and responses
5. **Evidence Preservation Critical**:
   - Spoliation warnings
   - What must NOT be deleted
   - Consequences of deletion
6. **Red Flags**:
   - Partner's incomplete disclosures
   - Missing documents
   - Inconsistencies
   - Delayed responses
7. **Checklist** - Disclosure requirements

Educational, emphasize honesty and completeness.
```

**Then invoke:**
```
@financial-forensics

You are writing the financial analysis section of Stage 6 for the divorce roadmap. This builds on disclosures to analyze finances.

Write a comprehensive section covering:

1. **Analyzing Disclosed Information**:
   - Review for completeness
   - Look for red flags
   - Cross-check different sources
2. **Dissipation Detection**:
   - What is dissipation
   - Red flags in bank statements
   - Unusual spending patterns
   - Transfers to third parties
   - Timeline matters (when did wasteful spending occur)
3. **Asset Tracing**:
   - Following the money
   - Commingled accounts
   - Separate property claims
4. **When to Hire Forensic Accountant**:
   - Business ownership
   - Complex assets
   - Suspected hidden income
   - Cash business
5. **Lifestyle Analysis** - Income vs expenses comparison
6. **Valuation Issues**:
   - What needs professional valuation
   - Getting appraisals (home, business)
   - Retirement account values
   - Stock options/RSUs
7. **QDRO Identification** - Flag all accounts needing QDROs
8. **Red Flags**:
   - Incomplete picture
   - Suspicious transactions
   - Partner stalling discovery
9. **Checklist** - Analysis tasks

Educational, detective work approach.
```

**Combine both outputs into Stage 6 file**

---

### Stage 7: Parenting Plan Development
**File:** `Roadmap/07-parenting-plan-development.md`

**Invoke Subagent:**
```
@coparenting

You are writing Stage 7 (Parenting Plan Development) of the divorce roadmap. This educational guide explains how custody and parenting plans are determined.

Write a complete guide covering:

1. **Overview** - What is a parenting plan, why it matters
2. **Best Interests of the Child Factors**:
   - Stability & continuity
   - Caregiving history
   - Parental capacity
   - Parent-child relationship quality
   - Safety (DV, substance abuse)
   - Cooperation between parents
   - Child's preference (age-appropriate)
   - Sibling relationships
   - Education & activities
   - Special needs
3. **Physical vs Legal Custody**:
   - What's the difference
   - Sole vs joint
   - Decision-making allocation
4. **Parenting Schedule Components**:
   - Regular weekday/weekend pattern
   - Holidays
   - School breaks
   - Summer
   - Exchanges (time, place, transport)
5. **Age-Appropriate Schedules**:
   - Infants/toddlers
   - Preschool
   - Elementary
   - Teenagers
6. **Decision-Making Provisions**:
   - Education decisions
   - Healthcare decisions
   - Religious upbringing
   - Extracurriculars
   - Tie-breaking mechanisms
7. **Communication Protocols**:
   - Between parents
   - With children during other parent's time
   - Emergencies
   - Information sharing
8. **Travel & Relocation**:
   - Advance notice requirements
   - Itinerary sharing
   - Passport issues
   - Relocation procedures
9. **Dispute Resolution**:
   - Mediation
   - Parenting coordinator
   - Court as last resort
10. **UCCJEA for Multi-State Issues**:
    - What is UCCJEA
    - Home state jurisdiction
    - Relocation jurisdictional issues
11. **High-Conflict Strategies**:
    - Parallel parenting
    - Co-parenting apps
    - GAL/parenting coordinator
12. **Red Flags**:
    - Partner gatekeeping
    - Child manipulation
    - Safety concerns
    - Interstate jurisdiction issues
13. **Checklist** - Parenting plan components to address

Educational, child-focused approach.
```

---

### Stage 8: Property Division
**File:** `Roadmap/08-property-division.md`

**Invoke Subagent:**
```
@financial-forensics

You are writing Stage 8 (Property Division) of the divorce roadmap. This educational guide explains how marital property is characterized, valued, and divided.

Write a complete guide covering:

1. **Overview** - Property division principles
2. **Community Property vs Equitable Distribution**:
   - 9 community property states (AZ, CA, ID, LA, NV, NM, TX, WA, WI)
   - 50/50 split in community property states
   - "Fair" not "equal" in equitable distribution states
   - Factors for equitable distribution
3. **Characterization - Marital vs Separate**:
   - Marital/community property (acquired during marriage)
   - Separate property (pre-marital, gifts, inheritance, post-separation)
   - Commingling issues
   - Tracing separate property
4. **Asset Inventory & Valuation**:
   - Real property (home, rental, land)
   - Vehicles
   - Financial accounts (bank, investment, crypto)
   - Retirement accounts (401k, IRA, pension)
   - Business interests
   - Stock options/RSUs
   - Life insurance cash value
   - Personal property
   - Intellectual property
   - Other assets (points, miles, tax refunds, claims)
5. **Valuation Methods**:
   - Real estate (CMA, appraisal)
   - Vehicles (KBB, NADA)
   - Businesses (professional valuation required)
   - Retirement accounts (current balance, coverture formula)
   - Stock options (vesting schedule, time rule)
6. **QDROs for Retirement Division**:
   - What is QDRO
   - Which plans need QDROs (401k, pensions)
   - Which don't (IRAs)
   - Process and timeline
   - Why decree alone isn't enough
   - Urgency of filing
7. **Debt Allocation**:
   - Marital vs separate debts
   - Mortgage, HELOC, auto loans
   - Credit cards
   - Student loans (whose? when incurred?)
   - Tax liabilities
   - Indemnification provisions
8. **Division Structures**:
   - In-kind division (each keeps certain assets)
   - Equalization payments
   - Offset agreements
   - Deferred sale of home
   - Home buyout
9. **Tax Implications**:
   - Transfers incident to divorce (generally tax-free)
   - Basis carryover
   - Different after-tax values (401k vs Roth vs cash)
10. **Red Flags**:
    - Hidden assets
    - Undervalued assets
    - Fraudulent transfers
    - Partner not cooperating with valuation
11. **Checklist** - Division process steps

Educational, comprehensive guide to property division.
```

---

### Stage 9: Support Determination
**File:** `Roadmap/09-support-determination.md`

**Invoke Two Subagents:**

**First invoke:**
```
@financial-forensics

You are writing the support calculation section of Stage 9 for the divorce roadmap. This educational guide explains child support and spousal support.

Write a comprehensive section covering:

1. **Child Support Overview**:
   - Guideline-based (each state has formula)
   - Three main models (Income Shares, Percentage of Income, Melson)
   - Factors considered (income, parenting time, healthcare, childcare)
   - State calculators available
   - Deviation factors
   - Duration (typically until 18, sometimes longer)
   - Modification conditions
2. **Calculating Child Support**:
   - What income counts
   - Imputation of income
   - Parenting time percentage impact
   - Healthcare costs allocation
   - Childcare/work-related expenses
   - Extraordinary expenses
3. **Spousal Support Overview**:
   - More discretionary than child support
   - Factors courts consider:
     * Length of marriage
     * Standard of living
     * Earning capacity of each
     * Age and health
     * Assets/debts to each
     * Contributions as homemaker
     * Domestic violence
   - Types (temporary, rehabilitative, long-term, lump sum)
4. **Spousal Support Considerations**:
   - No universal formula
   - Jurisdictional differences
   - Duration rules of thumb
   - Modifiability
   - Termination events (remarriage, cohabitation, death)
5. **Coordinating Support Types** - Not double-dipping
6. **Budget Impact** - How support affects each party's budget
7. **Red Flags**:
   - Income manipulation
   - Underemployment claims
   - Unrealistic support demands

Educational, explain how support is calculated.
```

**Then invoke:**
```
@tax-benefits

You are writing the tax implications section of Stage 9 for the divorce roadmap. This explains how support affects taxes.

Write a comprehensive section covering:

1. **Child Support Tax Treatment**:
   - NEVER deductible by payer
   - NEVER taxable to recipient
   - This applies under all rules (pre and post-2018)
2. **Alimony Tax Treatment**:
   - **Post-2018 Rule** (default for agreements after Dec 31, 2018):
     * NOT deductible by payer
     * NOT taxable to recipient
     * Major change affecting calculations
   - **Pre-2019 Grandfathered**:
     * IS deductible by payer
     * IS taxable to recipient
     * If agreement executed on/before Dec 31, 2018
3. **Impact on Support Amounts**:
   - Post-2018: Payers often argue for lower amounts (no tax benefit)
   - Example showing after-tax cost difference
   - Why this matters in negotiations
4. **Allocating Between Support Types**:
   - Importance of specifying child vs spousal split
   - IRS treats as child support first (up to guideline)
   - Remainder is spousal
5. **What Qualifies as Alimony for Tax**:
   - Must meet IRS requirements
   - Cash payment
   - Under decree
   - Not designated as "not alimony"
   - No obligation after recipient's death
   - Not child support
6. **Tax Implications for Settlement**:
   - Post-2018: Alimony vs property trade-offs
   - After-tax value comparisons
   - Lump sum alternatives
7. **Checklist** - Tax questions to address

Educational, explain tax rules clearly.
```

**Combine both outputs into Stage 9 file**

---

### Stage 10: Settlement or Trial
**File:** `Roadmap/10-settlement-or-trial.md`

**Invoke Subagent:**
```
@negotiation-settlement

You are writing Stage 10 (Settlement or Trial) of the divorce roadmap. This educational guide explains settlement negotiation and trial preparation.

Write a complete guide covering:

1. **Overview** - Two paths (settle vs trial), statistics (most settle)
2. **Settlement Approach**:
   - Package proposals (property + support + parenting integrated)
   - Not line-item haggling
   - Benefits of settlement (control, cost, time, privacy, relationship preservation)
3. **BATNA/WATNA Analysis**:
   - What is BATNA (Best Alternative to Negotiated Agreement)
   - What is WATNA (Worst Alternative to Negotiated Agreement)
   - How to identify yours
   - Using BATNA/WATNA to evaluate offers
   - Settlement range (between BATNA and WATNA)
4. **Settlement Proposal Development**:
   - Identify interests (not just positions)
   - Prioritize issues
   - Research objective anchors (appraisals, calculators, typical outcomes)
   - Create 2-3 package options
   - Identify potential trades
5. **Mediation Process**:
   - What is mediation
   - Types (facilitative, evaluative)
   - Preparation checklist
   - Day-of strategy
   - If agreement reached vs impasse
6. **Collaborative Divorce Process**:
   - Team approach
   - Disqualification agreement
   - When it works well
   - When it doesn't
7. **Settlement Structures**:
   - House buyout
   - Deferred sale
   - Offset agreements
   - Spousal support structures (step-down, term-limited, lump sum)
8. **Evaluating Offers**:
   - Calculate total value
   - Compare to BATNA/WATNA
   - Identify problems
   - Develop counter-proposals
   - Red flags in offers (vague terms, no enforcement, unrealistic timelines)
9. **Trial Preparation** (if settlement fails):
   - Witness lists
   - Exhibit lists
   - Trial briefs
   - Testimony preparation
   - What to expect at trial
   - Timeline
   - Costs
10. **Making the Settlement vs Trial Decision**:
    - Factors to consider
    - Risks of trial
    - Benefits of settlement
11. **Marital Settlement Agreement (MSA)**:
    - What it includes
    - Enforcement provisions
    - Specificity required
12. **Red Flags**:
    - Bad faith negotiation
    - Unreasonable positions
    - Using process to delay
    - Pressure tactics
13. **Checklist** - Settlement/trial preparation tasks

Educational, strategic guidance approach.
```

---

### Stage 11: Judgment & Post-Decree
**File:** `Roadmap/11-judgment-and-postdecree.md`

**Invoke Three Subagents:**

**First invoke:**
```
@court-compliance

You are writing the post-decree compliance section of Stage 11 for the divorce roadmap. This educational guide explains tasks after final judgment.

Write a comprehensive section covering:

1. **Final Judgment Overview**:
   - What it means
   - When effective
   - Finality
   - Appeal period
2. **Asset Transfer Requirements**:
   - Timeline per decree
   - Bank accounts
   - Real estate (quitclaim deeds)
   - Vehicles (DMV title transfers)
   - Other assets
   - Documenting completion
3. **QDRO Filing & Follow-Up**:
   - Urgency (don't delay!)
   - Draft process
   - Pre-approval by plan
   - Court approval
   - Filing with plan
   - Following up (30, 60, 90 days)
   - Keeping approved QDRO with important docs
4. **Debt Responsibility**:
   - Close joint credit cards
   - Refinance mortgage (if required)
   - Transfer individual responsibility
   - Notify creditors (doesn't bind them, but protects you)
   - Indemnification enforcement if ex doesn't pay
5. **Compliance Tracking**:
   - Support payments (set up automatic if possible)
   - Parenting time schedule
   - Decision-making requirements
   - Documentation
6. **Enforcement if Other Party Doesn't Comply**:
   - Document violations
   - Contempt motions
   - Enforcement options
7. **Red Flags**:
   - Missed asset transfer deadlines
   - Partner not complying
   - QDRO delays
   - Support arrears accumulating
8. **Checklist** - Post-decree compliance tasks

Educational, emphasize importance of timely completion.
```

**Then invoke:**
```
@tax-benefits

You are writing the post-decree tax and benefits section of Stage 11 for the divorce roadmap. This covers tax and insurance after divorce is final.

Write a comprehensive section covering:

1. **Insurance Updates**:
   - Health insurance (COBRA election if losing coverage)
   - Life insurance (update beneficiaries unless required to keep ex)
   - Auto insurance (remove ex, update address)
   - Home/renters insurance
   - Disability insurance beneficiaries
2. **COBRA Continuation**:
   - 60-day election deadline (critical!)
   - Premium costs (full premium plus 2%)
   - Duration (up to 36 months)
   - Alternatives (Marketplace, employer coverage)
   - Who pays per decree
3. **Beneficiary Updates**:
   - Retirement accounts (after QDRO complete, unless required to keep ex)
   - Bank account POD/TOD
   - Life insurance
   - Brokerage accounts
   - When NOT to change (decree requires maintaining ex)
4. **Estate Planning Updates**:
   - Update will, trust
   - Update power of attorney
   - Update healthcare directive
   - Remove ex as executor/trustee/agent (unless you want them to remain)
5. **Tax Filing Post-Divorce**:
   - Filing status for first year divorced (Single or Head of Household)
   - Head of Household qualification
   - Dependency claims per decree
   - Form 8332 if releasing claim
   - Child tax credit, EITC allocation
   - Alimony treatment (post-2018 vs grandfathered)
6. **W-4 Updates** - Adjust withholdings for new filing status
7. **Red Flags**:
   - Missing COBRA election deadline
   - Forgetting to update beneficiaries
   - Tax filing conflicts with ex
8. **Checklist** - Tax and benefits updates

Educational, deadline-focused approach.
```

**Then invoke:**
```
@wellbeing-logistics

You are writing the life transition section of Stage 11 for the divorce roadmap. This covers rebuilding life after divorce is final.

Write a comprehensive section covering:

1. **Legal/Administrative Updates**:
   - Name change (if applicable):
     * Social Security Administration
     * DMV (driver's license)
     * Passport
     * Banks/financial institutions
     * Employer
     * Insurance companies
     * Medical providers
     * Schools (for children)
   - Voter registration
   - Professional licenses
2. **Financial Account Organization**:
   - Individual accounts established
   - Joint accounts closed
   - Credit cards in own name
   - Credit monitoring ongoing
   - Rebuilding credit if needed
3. **Establishing New Routines**:
   - For yourself (sleep, meals, exercise, work)
   - For children (consistency across homes)
   - Co-parenting communication patterns
   - Managing exchanges smoothly
4. **Emotional Healing**:
   - Continuing therapy/support groups
   - Allowing grief process
   - Self-compassion
   - Small wins
   - Looking forward
5. **Children's Adjustment**:
   - Supporting kids through transition
   - Maintaining stability
   - Both parents' involvement
   - Professional support if needed
6. **Practical Life Setup**:
   - Housing stable
   - Utilities/insurance in order
   - Household routines working
   - Co-parenting logistics smooth
7. **Moving Forward**:
   - Creating new life vision
   - Setting goals
   - Building support network
   - Recognizing growth
8. **Red Flags**:
   - Difficulty functioning
   - Ongoing high conflict with ex
   - Children showing distress
   - Financial instability
9. **Checklist** - Life transition tasks

Educational, hopeful, forward-looking tone.
```

**Combine all three outputs into Stage 11 file**

---

## Protection & Strategy Guides

### Strategies to Protect Yourself and Kids
**File:** `Roadmap/strategies-protect-yourself-and-kids.md`

**Invoke Multiple Subagents and Synthesize:**

1. `@safety-crisis` - Write section on physical/digital safety, protective orders
2. `@document-evidence` - Write section on lawful evidence gathering, recording laws
3. `@financial-forensics` - Write section on protecting finances, monitoring credit
4. `@coparenting` - Write section on protecting children's best interests during divorce

**Combine into comprehensive protection strategies guide**

---

### What the Other Person Might Do
**File:** `Roadmap/what-other-person-might-do.md`

**Invoke Multiple Subagents and Synthesize:**

1. `@financial-forensics` - Write section on asset hiding, dissipation, financial manipulation
2. `@safety-crisis` - Write section on financial control, litigation abuse, surveillance
3. `@coparenting` - Write section on gatekeeping, child manipulation
4. `@court-compliance` - Write section on order violations, enforcement options

**Combine into guide about concerning partner behaviors and counters**

---

### Allowed vs Not Allowed
**File:** `Roadmap/allowed-vs-not-allowed.md`

**Invoke Multiple Subagents and Synthesize:**

1. `@document-evidence` - Write section on evidence gathering (legal vs illegal)
2. `@legal-navigator` - Write section on ATRO compliance, what's prohibited during case
3. `@financial-forensics` - Write section on what financial moves are allowed vs prohibited
4. `@coparenting` - Write section on parenting decisions during divorce

**Combine into clear boundaries guide**

---

### Dividing Things Fairly
**File:** `Roadmap/dividing-things-fairly.md`

**Invoke Subagent:**
```
@financial-forensics

You are writing a comprehensive guide on property division for the divorce roadmap. This educational resource explains how to divide marital property fairly.

Consolidate your expertise on:
1. Master inventory (all asset types)
2. Characterization (marital vs separate)
3. Valuation methods
4. Community property vs equitable distribution
5. QDRO requirements
6. Debt allocation
7. Tax implications
8. Division structures and options

This is the go-to reference for understanding property division.
```

---

### Settlement Strategies
**File:** `Roadmap/settlement-strategies.md`

**Invoke Subagent:**
```
@negotiation-settlement

You are writing a comprehensive guide on settlement strategies for the divorce roadmap. This educational resource explains negotiation approaches.

Consolidate your expertise on:
1. Package proposals vs line-item haggling
2. BATNA/WATNA analysis
3. Interest-based negotiation
4. Objective anchors
5. Mediation preparation and tactics
6. Collaborative divorce process
7. Evaluating offers
8. Settlement structures
9. Trade-offs and creative solutions

This is the go-to reference for settlement strategy.
```

---

### What Never to Do
**File:** `Roadmap/what-never-to-do.md`

**Invoke All Subagents and Synthesize:**

Ask each subagent for their "never do" list:
1. `@safety-crisis` - Never do: illegal surveillance, retaliation, etc.
2. `@legal-navigator` - Never do: violate orders, miss deadlines, etc.
3. `@document-evidence` - Never do: delete evidence, illegal access, etc.
4. `@financial-forensics` - Never do: hide assets, dissipate, etc.
5. `@coparenting` - Never do: coach children, withhold time, alienate, etc.
6. `@negotiation-settlement` - Never do: bad faith negotiation, unreasonable positions, etc.
7. `@court-compliance` - Never do: ignore orders, miss deadlines, self-help remedies, etc.
8. `@tax-benefits` - Never do: tax fraud, ignore filing requirements, etc.
9. `@wellbeing-logistics` - Never do: isolate, neglect health, use substances to cope, etc.

**Combine into comprehensive "costly mistakes" guide**

---

### First 10 Moves Today
**File:** `Roadmap/first-10-moves-today.md`

**Invoke Multiple Subagents and Synthesize:**

1. `@safety-crisis` - First moves for safety
2. `@document-evidence` - First moves for documents
3. `@financial-forensics` - First moves for finances
4. `@coparenting` - First moves for children
5. `@wellbeing-logistics` - First moves for wellbeing

**Combine into actionable immediate steps guide**

---

## Building Process

1. **Create each file by invoking the specified subagent(s)**
2. **Provide the prompt shown above for each file**
3. **Subagents will generate comprehensive content based on their expertise**
4. **Combine multi-agent outputs where specified**
5. **Save all files to `Roadmap/` folder**
6. **Result: Complete A-Z divorce roadmap written by expert subagents**

## Format for Each Roadmap File

Each file should follow this general structure:

```markdown
# [Stage/Topic Name]

## Overview
What this stage/topic is about

## What to Expect
Common experiences, challenges, timeline

## Required Actions
✓ Checklist format
✓ Specific, actionable items
✓ Prioritized

## Documents Needed
What documents/information required

## Red Flags & Risks
Warning signs to watch for

## What Your Partner Might Do
Common concerning tactics at this stage

## Resources
- Specific hotlines, websites, tools
- Where to get help

## Common Mistakes
What NOT to do

## Next Steps / When to Move Forward
Criteria for progressing to next stage
```

---

**This workflow enables building a comprehensive divorce roadmap by leveraging the specialized expertise of each subagent for their domain.**
