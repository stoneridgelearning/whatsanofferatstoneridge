

## Update Process Steps in StepProcess.tsx

The current steps array (lines 5-11) still reflects the original ordering and is missing key steps from stakeholder feedback. Replace it with the corrected flow:

### New steps (in order):
1. **Manager Discussion** — Discuss your offer idea with your manager to get initial alignment and feedback
2. **Submit Offer Form** — Obtain the submission form from your manager and complete it with all key details: scope, deliverables, pricing, and timeline
3. **Offer Committee Review & Approval** — The offer committee evaluates the submission for market fit, feasibility, and strategic alignment, and approves or provides feedback
4. **Offer Enablement** — Final pricing, delivery readiness, playbooks, templates, and training materials are prepared
5. **Go-To-Market Launch** — The offer is officially launched with marketing collateral, sales enablement, and client-facing materials

### Additional changes:
- Import additional icons (`MessageSquare`, `CheckCircle`, `BookOpen`) from lucide-react for the new steps
- Update the completion section: add a "Finish" button as the primary action, keep "Start Over" as secondary
- Update the "why" text for the D365 quiz item in `StepNotAnOffer.tsx` to emphasize that the key differentiator is solving a problem for **multiple customers** and being reusable (not just fixed scope/price)

### Files modified:
- `src/components/learning/StepProcess.tsx` — new steps array, icons, completion UX
- `src/components/learning/StepNotAnOffer.tsx` — updated D365 explanation

