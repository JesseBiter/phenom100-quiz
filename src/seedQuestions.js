export const SEED_QUESTIONS = [
  {
    id: "seed-001",
    category: "Walkaround / CDL",
    question: "How many static whips are on the plane and where are they located?",
    answer: "12 total static dischargers, all on control surfaces:\n\n• 3 on the right aileron\n• 3 on the left aileron\n• 4 on the elevator\n• 2 on the rudder\n\nCDL (AFM Appendix 1) allows dispatch with as few as 8, but only 1 missing per control surface."
  },
  {
    id: "seed-002",
    category: "Electrical",
    question: "What are the 7 electrical busses?",
    answer: "1. DC BUS 1 (powered by SG 1)\n2. DC BUS 2 (powered by SG 2)\n3. EMERGENCY BUS (normally fed by SG 1)\n4. CENTRAL BUS (fed by SG 2, has starter contactors and hyd pump)\n5. SHED BUS (fed by SG 2, drops if a generator fails in flight)\n6. HOT BATT BUS 1 (always hot, direct from BATT 1)\n7. HOT BATT BUS 2 (always hot, direct from BATT 2)\n\nSplit: SG 1 → DC1 + Emergency + Hot Batt 1. SG 2 → DC2 + Central + Shed + Hot Batt 2."
  },
  {
    id: "seed-003",
    category: "Engines",
    question: "What are the three types of failed starts?",
    answer: "All three are auto-detected and stopped by the FADEC:\n\n1. NO LIGHT OFF — ITT has not risen significantly within 15 seconds of fuel flow initiation\n2. HUNG START — Time to reach idle exceeds 45 seconds\n3. HOT START — ITT exceeds the starting limit (830°C)\n\nFADEC will NOT auto-stop for:\n• N1 not spinning\n• Oil pressure not rising\n\nIf oil pressure doesn't come up, do NOT attempt a restart. Get maintenance."
  },
  {
    id: "seed-004",
    category: "Memory Items",
    question: "Memory items for SMOKE / FIRE / FUMES?",
    answer: "• Crew Oxygen Masks: DON, EMER (then 100% after 2 minutes)\n• Auto Dilution Valve: CLOSED\n• Smoke Goggles: DON\n• Communication: ESTABLISH\n• DUMP Button: PUSH IN"
  },
  {
    id: "seed-005",
    category: "Memory Items",
    question: "Memory items for SMOKE EVACUATION?",
    answer: "• Crew Oxygen Masks: DON, EMER (then 100% after 2 minutes)\n• Auto Dilution Valve: CLOSED\n• Smoke Goggles: DON\n• Communication: ESTABLISH\n• O2 Supply Control Knob: CREW ONLY\n• BLEED Knob: OFF VENT\n• DUMP Button: PUSH IN"
  },
  {
    id: "seed-006",
    category: "Memory Items",
    question: "Memory items for EMERGENCY EVACUATION?",
    answer: "• Thrust Levers: IDLE\n• Emergency / Parking Brake: ON\n• Start / Stop Knobs: STOP\n• Fire Shutoff Buttons: PUSH IN\n• PRESN MODE Switch: MAN\n• Pressurization Dump Button: PUSH IN\n• ATC: NOTIFY\n• Evacuation: PERFORM\n• BATT 1 & 2 Switches: OFF"
  },
  {
    id: "seed-007",
    category: "Memory Items",
    question: "Memory items for ENGINE ABNORMAL START?",
    answer: "• Start / Stop Knob (affected engine): STOP"
  },
  {
    id: "seed-008",
    category: "Memory Items",
    question: "Memory items for ENGINE FIRE, SEVERE DAMAGE OR SEPARATION?",
    answer: "Affected Engine:\n• Thrust Lever: IDLE\n• Start / Stop Knob: STOP\n• Fire Shutoff Button: PUSH IN"
  },
  {
    id: "seed-009",
    category: "Memory Items",
    question: "Memory items for DUAL ENGINE FAILURE?",
    answer: "• Thrust Levers: IDLE\n• Oxygen Masks: DON 100%\n• Communication: ESTABLISH"
  },
  {
    id: "seed-010",
    category: "Memory Items",
    question: "Memory items for INADVERTENT PUSHER ACTIVATION?",
    answer: "• Quick Disconnect Button: PRESS\n• PUSHER CUTOUT Button: PUSH IN"
  },
  {
    id: "seed-011",
    category: "Memory Items",
    question: "Memory items for REJECTED TAKEOFF (at or below V1)?",
    answer: "• Thrust Levers: IDLE\n• Brakes: APPLY MAXIMUM\n• Directional Control: MAINTAIN"
  },
  {
    id: "seed-012",
    category: "Memory Items",
    question: "Memory items for E1 (2) FIRE?",
    answer: "Affected Engine:\n• Thrust Lever: IDLE\n• Start / Stop Knob: STOP\n• Fire Shutoff Button: PUSH IN"
  },
  {
    id: "seed-013",
    category: "Memory Items",
    question: "Memory items for CABIN ALTITUDE HI?",
    answer: "• Crew Oxygen Masks: DON, 100%\n• Crew Communication: ESTABLISH\n• Fasten Seat Belts Sign: ON\n• Altitude: 10,000 FT OR MEA, whichever is higher\n• Thrust Levers: IDLE\n• Airspeed: MAX 250 KIAS / Mmo\n• LDG GEAR Lever: DN\n• Airspeed: MAX 275 KIAS / Mmo\n• Transponder: 7700\n• ATC: NOTIFY"
  },
  {
    id: "seed-014",
    category: "Memory Items",
    question: "Memory items for EMERGENCY DESCENT?",
    answer: "• Fasten Seat Belts Sign: ON\n• Altitude: 10,000 FT OR MEA, whichever is higher\n• Thrust Levers: IDLE\n• Airspeed: MAX 250 KIAS / Mmo\n• LDG GEAR Lever: DN\n• Airspeed: MAX 275 KIAS / Mmo\n• Transponder: 7700\n• ATC: NOTIFY"
  },
  {
    id: "seed-015",
    category: "Memory Items",
    question: "Memory items for TAKEOFF WITH ENGINE FAILURE AT OR ABOVE V1?",
    answer: "At VR rotate the airplane per the table:\n• Flap 1: 9.5° pitch\n• Flap 2: 9° pitch\n\nWith Positive Rate of Climb:\n• LDG GEAR Lever: UP\n• Airspeed: V2"
  },
  {
    id: "seed-016",
    category: "Memory Items",
    question: "Memory items for ELEC XFR FAIL?",
    answer: "• ELEC EMER Button: PUSH IN"
  },
  {
    id: "seed-017",
    category: "Chair Fly",
    question: "Chair Fly: Unusual Attitude — NOSE HIGH recovery?",
    answer: "• Horn goes off, open eyes and raise head\n• TOGA right away\n• Turn left or right to 30 to 45 degrees while nosing over\n• Nose to horizon, not below it\n• Level wings\n• Speed up then pitch up\n• DONE"
  },
  {
    id: "seed-018",
    category: "Chair Fly",
    question: "Chair Fly: Unusual Attitude — NOSE LOW recovery?",
    answer: "• Horn goes off, open eyes and raise head\n• Power to idle right away\n• Level wings and raise nose to above the horizon\n• Apply power as speed bleeds off\n• DONE"
  },
  {
    id: "seed-019",
    category: "Chair Fly",
    question: "Chair Fly: CLEAN STALL?",
    answer: "• Power to idle with AP on\n• Set speed bug to 130 (FLC)\n• At 130: disconnect AP and hold 5,000 or a slight climb\n• Wait for the pusher\n• Once pushed, TOGA power FIRST\n• Keep pushing disconnect\n• Nose up on the horizon\n• Stick pusher disable\n• Climb to 5,000 and slow to 170\n• Reenable stick pusher\n• AP back on"
  },
  {
    id: "seed-020",
    category: "Chair Fly",
    question: "Chair Fly: DEPARTURE STALL?",
    answer: "Setup:\n• 5,000 ft and 170 knots\n• Power to Idle\n• Flaps 1\n• Bug 130 knots\n• At 130: AP disconnect\n• 20 deg left turn while maintaining 5,000 or a slight climb\n\nAt aural \"Stall Stall\" Recover:\n• TOGA Power\n• Wings Level\n• Pitch down to the horizon (not below it)\n• Speed will quickly climb, pitch to 7 degrees nose up\n• At Vfs / 130: Flaps Up\n• At 170 knots and level at 5,000: AP On"
  },
  {
    id: "seed-021",
    category: "Chair Fly",
    question: "Chair Fly: LANDING STALL?",
    answer: "Setup:\n• From 170 knots and 5,000 feet\n• Power to 50%\n• Flaps 1\n• Bug 130 knots on the FLC\n• Gear Down (keep hand on gear)\n• Flaps 3 (after 3 green)\n• At 145: Flaps full\n• At 130: Disconnect AP\n• Power to Idle\n\nAt aural \"Stall Stall\" Recover:\n• TOGA Power\n• Flaps 2 clicks (to Flaps 2)\n• Positive rate, gear up\n• At Vfs / 130: Flaps Up\n• Pitch to 5 degrees\n• FLC 170, follow Flight Director to 5,000\n• At 170 knots and level at 5,000: AP On"
  },
  {
    id: "seed-022",
    category: "Chair Fly",
    question: "Chair Fly: STEEP TURNS?",
    answer: "• Once at 170 knots and 5,000 feet\n• AP off\n• FD off\n• Roll left to 45 bank\n• Increase power slightly, about 67%\n• Trim and hold, verbalize what you're doing (little high, little slow, etc.)\n• 10 degrees before 360: fast rollover to the right at 45 degrees\n• 10 degrees before 360: roll out\n• Power back\n• Hold 170 knots and 5,000 feet\n• AP back on"
  },
  {
    id: "seed-023",
    category: "Limits",
    question: "Max Ramp Weight (MRW)?",
    answer: "10,516 lbs"
  },
  {
    id: "seed-024",
    category: "Limits",
    question: "Max Takeoff Weight (MTOW)?",
    answer: "10,472 lbs"
  },
  {
    id: "seed-025",
    category: "Limits",
    question: "Max Landing Weight (MLW)?",
    answer: "9,766 lbs"
  },
  {
    id: "seed-026",
    category: "Limits",
    question: "Max Zero Fuel Weight (MZFW)?",
    answer: "8,444 lbs"
  },
  {
    id: "seed-027",
    category: "Limits",
    question: "Wardrobe baggage limit?",
    answer: "55 lbs"
  },
  {
    id: "seed-028",
    category: "Limits",
    question: "Lavatory cabinet baggage limit?",
    answer: "33 lbs"
  },
  {
    id: "seed-029",
    category: "Limits",
    question: "AFT baggage compartment limit?",
    answer: "353 lbs"
  },
  {
    id: "seed-030",
    category: "Limits",
    question: "FWD baggage compartment limit?",
    answer: "66 lbs"
  },
  {
    id: "seed-031",
    category: "Limits",
    question: "VLO?",
    answer: "180 KIAS\n\n(Maximum landing gear operating speed.)"
  },
  {
    id: "seed-032",
    category: "Limits",
    question: "VLE?",
    answer: "275 KIAS\n\n(Maximum landing gear extended speed.)"
  },
  {
    id: "seed-033",
    category: "Limits",
    question: "Mmo?",
    answer: "0.70 Mach"
  },
  {
    id: "seed-034",
    category: "Limits",
    question: "Vmo?",
    answer: "275 KIAS"
  },
  {
    id: "seed-035",
    category: "Limits",
    question: "VMC (Takeoff)?",
    answer: "97 KIAS"
  },
  {
    id: "seed-036",
    category: "Limits",
    question: "VMC (Landing, no icing)?",
    answer: "86 KIAS"
  },
  {
    id: "seed-037",
    category: "Limits",
    question: "VMC (Landing, icing)?",
    answer: "97 KIAS"
  },
  {
    id: "seed-038",
    category: "Limits",
    question: "VO?",
    answer: "186 KIAS\n\n(Maximum operating maneuvering speed.)"
  },
  {
    id: "seed-039",
    category: "Limits",
    question: "VFE Flaps 1?",
    answer: "200 KIAS"
  },
  {
    id: "seed-040",
    category: "Limits",
    question: "VFE Flaps 2?",
    answer: "160 KIAS"
  },
  {
    id: "seed-041",
    category: "Limits",
    question: "VFE Flaps 3?",
    answer: "160 KIAS"
  },
  {
    id: "seed-042",
    category: "Limits",
    question: "VFE Flaps Full?",
    answer: "145 KIAS"
  },
  {
    id: "seed-043",
    category: "Limits",
    question: "Maximum tire ground speed?",
    answer: "139 kts"
  },
  {
    id: "seed-044",
    category: "Limits",
    question: "Max altitude for flap extension, yaw damper operative?",
    answer: "15,000 ft"
  },
  {
    id: "seed-045",
    category: "Limits",
    question: "Max altitude for flap extension, yaw damper NOT operative?",
    answer: "12,000 ft"
  },
  {
    id: "seed-046",
    category: "Limits",
    question: "Maneuvering load factor flaps up?",
    answer: "+3.27 g"
  },
  {
    id: "seed-047",
    category: "Limits",
    question: "Maneuvering load factor flaps down (1, 2, 3, Full)?",
    answer: "+2.00 g"
  },
  {
    id: "seed-048",
    category: "Limits",
    question: "Are acrobatic maneuvers authorized?",
    answer: "No. No acrobatic maneuvers, including spins, are authorized."
  },
  {
    id: "seed-049",
    category: "Limits",
    question: "Minimum crew?",
    answer: "1 pilot.\n\n• Pilot must occupy the left cockpit seat\n• Operative autopilot and flight director are required for single pilot ops\n• Pilot must use a headset mounted microphone"
  },
  {
    id: "seed-050",
    category: "Limits",
    question: "Maximum passenger seating?",
    answer: "5, 6, or 7 PAX.\n\n• A passenger may occupy the right seat only in single pilot ops\n• Lavatory use is prohibited for taxi, takeoff, and landing if the belt is not installed\n• Refers to adults. One infant under 2 may be held by an adult in an aft seat."
  },
  {
    id: "seed-051",
    category: "Limits",
    question: "Pilot sun-visor limitation?",
    answer: "Must be kept at the vertical position when in use, and must be stowed for taxi, takeoff, and landing."
  },
  {
    id: "seed-052",
    category: "Limits",
    question: "Cockpit curtain use?",
    answer: "Ground only, during cabin temp cool down."
  },
  {
    id: "seed-053",
    category: "Limits",
    question: "Allowable runway slope?",
    answer: "Negative 2% to positive 2%."
  },
  {
    id: "seed-054",
    category: "Limits",
    question: "Allowable runway surface type?",
    answer: "Paved."
  },
  {
    id: "seed-055",
    category: "Limits",
    question: "Max takeoff and landing tailwind component?",
    answer: "10 kts"
  },
  {
    id: "seed-056",
    category: "Limits",
    question: "Stall warning and protection system check?",
    answer: "Must be tested prior to each flight."
  },
  {
    id: "seed-057",
    category: "Limits",
    question: "Minimum battery voltage for engine start?",
    answer: "24 V"
  },
  {
    id: "seed-058",
    category: "Limits",
    question: "Minimum GPU voltage for battery charging?",
    answer: "27 V"
  },
  {
    id: "seed-059",
    category: "Limits",
    question: "Max generator load?",
    answer: "250 A each.\n\nMay be exceeded up to 300 A inflight below 34,000 ft."
  },
  {
    id: "seed-060",
    category: "Limits",
    question: "Maximum usable fuel quantity per tank?",
    answer: "1,403 lbs"
  },
  {
    id: "seed-061",
    category: "Limits",
    question: "Unusable fuel quantity per tank?",
    answer: "22 lbs"
  },
  {
    id: "seed-062",
    category: "Limits",
    question: "Minimum fuel temperature?",
    answer: "Negative 37°C"
  },
  {
    id: "seed-063",
    category: "Limits",
    question: "Maximum fuel temperature on the ground?",
    answer: "52°C"
  },
  {
    id: "seed-064",
    category: "Limits",
    question: "Maximum fuel temperature in the air?",
    answer: "80°C"
  },
  {
    id: "seed-065",
    category: "Limits",
    question: "Maximum ITT (T/O, Con, Start, Trans)?",
    answer: "830°C"
  },
  {
    id: "seed-066",
    category: "Limits",
    question: "Maximum N1?",
    answer: "100%"
  },
  {
    id: "seed-067",
    category: "Limits",
    question: "Time limit in T/O thrust?",
    answer: "5 minutes"
  },
  {
    id: "seed-068",
    category: "Limits",
    question: "Starter limits (1st, 2nd, 3rd, 4th)?",
    answer: "• 1st: 60 seconds\n• 2nd: 60 seconds\n• 3rd: 15 minutes (cool down)\n• 4th: 30 minutes (cool down)"
  },
  {
    id: "seed-069",
    category: "Limits",
    question: "Max differential pressure?",
    answer: "8.3 psi"
  },
  {
    id: "seed-070",
    category: "Limits",
    question: "Max differential overpressure?",
    answer: "8.6 psi"
  },
  {
    id: "seed-071",
    category: "Limits",
    question: "Max differential pressure for takeoff and landing?",
    answer: "0.2 psi"
  },
  {
    id: "seed-072",
    category: "Limits",
    question: "When are both ENG (anti-ice) switches required ON?",
    answer: "When SAT (TAT inflight) is below positive 10°C and visible moisture is present."
  },
  {
    id: "seed-073",
    category: "Limits",
    question: "When are WiSHLD and WINGSTAB required ON?",
    answer: "When SAT (TAT inflight) is positive 5°C to negative 40°C and visible moisture is present."
  },
  {
    id: "seed-074",
    category: "Limits",
    question: "Minimum airspeed in icing?",
    answer: "160 KIAS"
  },
  {
    id: "seed-075",
    category: "Limits",
    question: "Minimum airspeed to turn on the boots?",
    answer: "150 KIAS"
  },
  {
    id: "seed-076",
    category: "Limits",
    question: "Min AP engagement height, dual engine?",
    answer: "500 ft AGL"
  },
  {
    id: "seed-077",
    category: "Limits",
    question: "Min AP engagement height, single engine?",
    answer: "1,000 ft AGL"
  },
  {
    id: "seed-078",
    category: "Limits",
    question: "Minimum use height for the autopilot?",
    answer: "195 ft AGL"
  },
  {
    id: "seed-079",
    category: "Limits",
    question: "Max altitude loss (maneuvering / cruise)?",
    answer: "54 feet"
  },
  {
    id: "seed-080",
    category: "Chair Fly",
    question: "Chair Fly: NORMAL TAKEOFF?",
    answer: "• Pre-takeoff briefing\n• Positive rate, gear up\n• Call out at 400 ft (750 AGL): say \"400 ft\", Flaps Up, Con/Climb\n• At 500 ft: AP On\n• FLC 160\n• Confirm NAV\n• Departure CHECKLIST\n• Once told, off to departure\n• Level off at 5,000, get to 170 knots, bug it in FLC"
  },
  {
    id: "seed-081",
    category: "Limits",
    question: "When does the XFR button need to be pushed out?",
    answer: "For takeoff, landing, maneuvers, and turbulence."
  },
  {
    id: "seed-082",
    category: "Limits",
    question: "When will FADEC NOT stop a start",
    answer: "1) N1 not spinning\n2) Oil pressure not rising"
  },
  {
    id: "seed-083",
    category: "Chair Fly",
    question: "Chair fly a single engine go around",
    answer: "- TOGA Power\n    - TOGA Button\n    - Flaps Up 2 Clicks (3 to 1)\n    - Positive Rate, Gear Up\n    - RUDDER\n    - HDG button\n    - FLC Vac (push FLC and dial in Vac) \n            *Don't fly below Vac, can go up to 5 knots faster)\n    - At 1,000 ft AGL\n        - AP On\n        - YD Off\n        - FLC to Vfs\n        - @ Vfs\n            - Flaps Up\n            - Throttle to Con / Climb\n    - After departure CHECKLIST\n    - Transfer Fuel Button In"
  },
  {
    id: "seed-084",
    category: "Chair Fly",
    question: "Chair fly a single engine landing",
    answer: "- Confirm you have alternate missed approach instructions\n    - PROC Button: Add approach with proper transition\n    - Brief approach\n    - Add BARO Mins\n    - NAP 1-24 - Single Engine Approach CHECKLIST\n    - Slow from 170 knots to 150 by adding Flaps 1 - @150 by approach fix\n    - Cleared the approach hit APR\n    - Before landing single engine CHECKLIST, NAP 1-24\n    - Fuel Transfer Button OUT\n    - At 1 Dot ABOVE Glidescope, bring down the gear, hand on the gear \n              *This is different then 2 engines when we bring the gear down 2 Dots above\n    - 3 Green - Flap 3 (last flaps, no full on single engine)\n    - Once established on the GS put missed approach altitude in e.g = 2,000 ft\n    - At Minimums - Auto Pilot Off\n    - Hand fly & Land"
  },
  {
    id: "seed-085",
    category: "Chair Fly",
    question: "Chair Fly: REJECTED TAKEOFF",
    answer: "- Before Takeoff CHECKLIST\n    - Takeoff briefing\n    - Start to take off\n    - Loss of direction control\n        - Thrust Idle\n        - Max braking\n        - Maintain directional control\n        - Notify ATC once stopped\n        - 50 minute cool time, maintenance check"
  },
  {
    id: "seed-086",
    category: "Limits",
    question: "Hydraulic check interval?",
    answer: "Every 15 days or before next flight, whichever occurs last."
  },
  {
    id: "seed-087",
    category: "Chair Fly",
    question: "Chair Fly: V1 CUT",
    answer: "- Resume take off, expect an engine failure\n    - FLY THE AIRPLANE\n    - Maintain directional control\n    - Positive Rate - Gear Up\n    - FLC - Put in V2\n    - At 1,000 Feet\n        - AP - AutoPilot On\n        - YD Off\n        - FLC to Vfs\n        - @ Vfs speed\n            - Flaps Up\n            - Throttles to Con / Climb\n    - Restart Engine Checklist"
  },
  {
    id: "seed-088",
    category: "Chair Fly",
    question: "Chair Fly: CIRCLE TO LAND",
    answer: "** NOTES: No APR on this approach, it's dive and drive\n    - Add initial PROC to FMS\n    - Descent checklist\n    - Brief Approach\n    - Add BARO Mins for Cat C (speed will be 130)\n    - Prior to IAF\n        - Dial in next lower altitude\n        - Slow from 170 Flaps 0 to 150 Flaps 1\n    - At IAF\n        - VS (Vertical Speed), 1,000 ft per min to next altitude (NO APR BUTTON)\n        - At Altitude, prior to FAF, dial in the Decision Altitude\n    - 3 Miles from FAF\n        - Gear down - hand on handle\n        - 3 Green - Flaps 3\n        - Slow to 130 - Bug this in FLC\n    - Before landing CHECKLIST\n    - At FAF\n        - VS 1,000 FPM\n        - Prep HEADING to a 50 degree left or right\n        - Level off at decision altitude and stay at 130!! (+5 ok, slower not ok)\n    - Report airport in sight\n    - Once cleared to circle hit HDG on AP to start the turn\n    - Keep the airport in sight \n    - Use HDG to start a left turn to square up the base\n    - Confirm you see the proper runway, descend and prepare for turn to final\n    - After turn to final you can slow down (no more maneuvers)\n    - Get to REF and land"
  },
  {
    id: "seed-089",
    category: "Chair Fly",
    question: "Chair Fly: WIND SHEAR",
    answer: "- Before takeoff CHECKLIST\n    - Takeoff Briefing\n    - 70 Knot Cross Check - V1\n    - V1 - Take Off\n    - Positive Rate - Gear Up\n    - 400 Feet - Flaps 0 and Con / Climb (probably won't get here)\n    - Once windshear is noticed then power to FULL MAX\n    - Pitch to 15 degrees or higher - get speed to YELLOW\n    - HOLD until climb rate returns\n    - Power back and get back to a normal climb @160 FLC\n    - Flaps 0\n    - Take Off CHECKLIST"
  },
  {
    id: "seed-090",
    category: "Chair Fly",
    question: "Chair Fly: FLAP FAIL",
    answer: "- Ask ATC for instructions to hold or a heading to deal with a flap fail and to return to the airport\n    - Suspend HOLD to work on Flap Fail\n    - Flap Fail Checklist\n    - Before Landing CHECKLIST\n    - Brief the approach *Green Needles for this!!! (in CAE Sim)\n    - Set BARO Minimums\n    - Fly the approach (be ready for an engine fire @ CAE) - if you get an engine fire, do nothing, just tell ATC and land the plane - do emergency evacuation."
  },
  {
    id: "seed-091",
    category: "Chair Fly",
    question: "Chair Fly: EMERGENCY EVACUATION",
    answer: "- ENGINE FIRE / EMERGENCY EVACUATION\n    - Do NOTHING - land the plane\n    - Notify ATC in the air of the issue and that an evacuation will occur\n    - Land\n    - STOP\n    - Parking Break\n    - Engines to idle\n    - Start stop / STOP\n    - Push cut off button for affected engine ONLY (don't do the memory item of both engines, due to the fire you want the full bottle going into the affected engine)\n    - Bottle Discharge\n    - AFTER discharge, push cut off button for good engine\n    - Pressure to Manual\n    - Cabin Dump\n    - No need to call ATC, you already did\n    - Evacuate people\n    - Bat 1 and 2 Off"
  },
  {
    id: "seed-092",
    category: "Limits",
    question: "What are the maneuvering speeds for each degree of flaps?",
    answer: "The FLAP maneuvering speeds were defined based on the capacity of the airplane to perform a coordinated turn of 40 degrees bank without the stall warning activation.\n\nUse flap maneuvering speeds as follows:\n\nGEAR/FLAPS     SPEED\n\nUP/0           170 KIAS\nUP/1           150 KIAS\nUP/2           130 KIAS\nDN/3           130 KIAS\nDN/FULL        130 KIAS"
  },
  {
    id: "seed-093",
    category: "Pressurization",
    question: "How does the pressurization system handle a return-to-field situation?",
    answer: "Return-to-Field mode kicks in automatically when you have to return to the airport you just departed from. It sets:\n\n• Cruise altitude 1,000 ft below the max altitude achieved in the first 10 minutes of flight\n• Never higher than 6,000 ft\n• Plane sets LTE automatically"
  },
  {
    id: "seed-094",
    category: "Cold Weather Ops",
    question: "What's recommended for an engine start after a cold soak?",
    answer: "If the airplane stayed exposed for 2 hours or more at an ambient temperature of -18°C (0°F) or lower:\n\n• Use a GPU (if applicable), OR\n• Pre-heat the battery to a temperature above -18°C (0°F) before starting the engine."
  },
  {
    id: "seed-095",
    category: "Cold Weather Ops",
    question: "What's the engine warm-up procedure after starting in cold weather?",
    answer: "Keep thrust levers at ground idle until oil reaches minimum operating temperature of 14°C (57°F).\n\nIf you advance either thrust lever out of idle before the oil hits 14°C, you'll trigger the ENGINE EXCEEDANCE message.\n\nOnce oil temp is reached, run the engine for an additional 3 minutes to make sure no ice particles are in the fuel supply."
  },
  {
    id: "seed-096",
    category: "Cold Weather Ops",
    question: "How do you prevent a D-I WINGSTB FAIL message in cold weather?",
    answer: "Turn the WINGSTAB switch to ON for approximately 3 minutes before flight, even when there are no ice conditions.\n\nThis clears any humidity in the line that could otherwise condensate and trigger the D-I WINGSTB FAIL message."
  },
  {
    id: "seed-097",
    category: "Cold Weather Ops",
    question: "What's the flap setting when taxiing through slush or standing water?",
    answer: "Flaps RETRACTED.\n\nRetracting the flaps avoids snow and slush contamination from the main gear wheels."
  },
  {
    id: "seed-098",
    category: "Cold Weather Ops",
    question: "What's the configuration for holding in icing conditions?",
    answer: "• Landing gear: UP\n• Flaps: UP\n• Minimum airspeed: 160 KIAS\n\nCAUTION: Even small accumulations of ice on the wing leading edge may change the stall characteristics or the stall protection system warning margin."
  },
  {
    id: "seed-099",
    category: "Preflight",
    question: "What lights show up during the annunciator test, in order from left to right?",
    answer: "7 lights, left to right:\n\n1. CVDR light 1\n2. CVDR light 2\n3. Electrical Emergency\n4. Fuel Transfer\n5. Pusher Cutout\n6. Parking Brake\n7. Pressure Dump"
  },
  {
    id: "seed-100",
    category: "Preflight",
    question: "What do you see when testing the fire system?",
    answer: "• 2 engines on MFD\n• 2 fuel cut off buttons (red and white)\n• CAS message and aural warning"
  },
  {
    id: "seed-101",
    category: "Avionics",
    question: "How do you activate Reversionary Mode manually, and which displays does each button affect?",
    answer: "Press the DISPLAY BACKUP button (red pushbutton) on the audio panel to activate. Press again to deactivate.\n\nEach display configures based on which button is pressed:\n\n• PFD 1: Left audio panel button\n• MFD: Left OR right audio panel button\n• PFD 2: Right audio panel button"
  },
  {
    id: "seed-102",
    category: "Cockpit Controls",
    question: "What does the SIGNS/OUTLET switch do in each of these positions?\n\n1. PED-BELTS/OFF\n2. BELTS/ON\n3. OFF/ON",
    answer: "PED-BELTS/OFF\n• FASTEN SEAT BELTS signs: ON\n• PED outlets: OFF\n• Main door courtesy/safety lights: ON\n\nBELTS/ON\n• FASTEN SEAT BELTS signs: ON\n• PED outlets: ON\n\nOFF/ON\n• Passenger signs: OFF\n• PED outlets: ON"
  },
  {
    id: "seed-103",
    category: "Electrical",
    question: "What powers the Static Inverter and how is it controlled?",
    answer: "The Static Inverter is powered by the 28 VDC SHED BUS and protected by a Circuit Breaker.\n\nIt's a nonessential bus source, controlled manually by a switch on the cockpit main panel. This is the single way the flight crew can turn it off without leaving their seats (below 10,000 ft) by setting the SIGNS/OUTLET switch to PED-BELTS/OFF."
  },
  {
    id: "seed-104",
    category: "Electrical",
    question: "When does the Static Inverter automatically remove AC power from the outlets?",
    answer: "Two situations:\n\n1. GFCI trip: When current at the 110 VAC/60 Hz outlets (passenger seats, lavatory, RH forward cabinet, cockpit) exceeds a predetermined value. The internal Ground Fault Circuit Interrupter cuts power and allows convenient testing/re-testing.\n\n2. Passenger oxygen masks deployed: AC power is automatically removed when the masks drop."
  },
  {
    id: "seed-105",
    category: "Preflight",
    question: "What does the Phenom 100 emergency equipment include?",
    answer: "Standard:\n• Cabin portable fire extinguisher\n• Cockpit portable fire extinguisher\n• Flashlight\n• First aid kit\n• Water barrier\n• Passenger oxygen masks\n\nOptional:\n• Life vest\n• Smoke goggles\n• Protective Breathing Equipment (PBE)"
  },
  {
    id: "seed-106",
    category: "Pressurization",
    question: "When you push the DUMP button, what cabin altitude does the system climb to?",
    answer: "Depends on which control mode the system is in:\n\n• AUTO control: 12,000 ft cabin altitude\n• MANUAL control: 14,500 ft cabin altitude\n\nThe DUMP button opens the outflow valve for rapid cabin depressurization and commands the recirculation fans off. Push once to activate (white striped bar illuminates), push again to return to normal."
  },
  {
    id: "seed-107",
    category: "Pressurization",
    question: "What does the CABIN ALTITUDE SELECTOR switch do in each position?",
    answer: "UP (momentary): Manually opens the outflow valve, increasing cabin altitude at approximately 300 ft/min.\n\nDN (momentary): Manually closes the outflow valve, decreasing cabin altitude at approximately 300 ft/min.\n\nNOTE: Manual actuation of the outflow valve is only possible with the PRESSURIZATION MODE switch set to MAN."
  },
  {
    id: "seed-108",
    category: "Pressurization",
    question: "What do the colors mean on the Differential Pressure indicator?",
    answer: "GREEN (normal): Above -0.2 psid and below 8.5 psid\n\nYELLOW (caution):\n• -0.4 to -0.2 psid (inclusive)\n• 8.5 to 8.6 psid (inclusive)\n\nRED (warning): Below -0.4 psid or above 8.6 psid\n\nRED X: Invalid, out of range, or failed\n\nThe indicator shows differential pressure between cabin interior and outside (in psi), regardless of operating mode."
  },
  {
    id: "seed-109",
    category: "Pressurization",
    question: "What do the Air Shutoff Valve symbols mean on the synoptic page?",
    answer: "The valve shows as a circle with an internal line indicating position:\n\n• CLOSED: White circle, white line perpendicular to the flow line\n• OPEN PRESSURIZED: Green circle, green line aligned with the flow line\n• OPEN UNPRESSURIZED: White circle, white line aligned with the flow line (no air bleed available)\n• FAILED OPEN: Green circle, green line aligned with the flow line, covered by a yellow X\n• FAILED CLOSED: White circle, white line perpendicular to the flow line, covered by a yellow X\n\nQuick rule of thumb: Green = pressurized and good. White = no pressure. Yellow X = failed."
  },
  {
    id: "seed-110",
    category: "Pneumatic System",
    question: "What is the function of the PRSOV (Pressure Regulating Shutoff Valve) in the bleed system?",
    answer: "Two main jobs:\n\n1. Regulate the hot bleed air released to the ECS (Environmental Control System)\n2. Provide firewall shutoff capability for the bleed air lines\n\nThere's one PRSOV per bleed line (two total)."
  },
  {
    id: "seed-111",
    category: "Pneumatic System",
    question: "When does the PRSOV automatically close?",
    answer: "Two situations:\n\n1. Hot air leak detected: Sensors along the bleed air lines detect the leak, send a system failure message to the crew, and automatically command the affected side's PRSOV to close.\n\n2. Single engine takeoff condition: PRSOV closes automatically."
  },
  {
    id: "seed-112",
    category: "Pneumatic System",
    question: "How does the bleed manifold feed the ACS, and what controls cabin temperature?",
    answer: "The bleed manifold splits the bleed air flow into two paths:\n\n1. Through the ECS HX (heat exchanger): Cooled by ram air in flight or a ground cooling fan on the ground.\n2. Bypass: Goes around the heat exchanger.\n\nThe TMV (Temperature Modulating Valve) controls how much air goes through each path to keep cabin temperature within limits.\n\nThe pneumatic system also feeds utility services like the de-ice boots and door seal."
  },
  {
    id: "seed-113",
    category: "Environmental Control",
    question: "What subsystems make up the ECS (Environmental Control System)?",
    answer: "Six integrated subsystems:\n\n1. Bleed Air Inflow System (Pneumatic System)\n2. Temperature Control System (TCS)\n3. Vapor Cycle Air Conditioning System (VCS)\n4. Air Distribution Ducting System\n5. Emergency Ventilation System\n6. Fresh Air Supply System (on ground)\n\nThe ECS runs on bleed air from the Pneumatic System. The Temperature Modulating Valve (TMV) controls how much hot bleed air is sent based on heating or cooling needs in each airplane zone."
  },
  {
    id: "seed-114",
    category: "Environmental Control",
    question: "How does the Temperature Control System work, and what are the two control modes?",
    answer: "The system provides automatic, independent zonal temperature control for cabin and cockpit areas based on pilot selection.\n\nHow it works:\n• Temperature sensors (TS) in the cabin and cockpit measure zone temperature\n• Duct temperature switches (TSS) are mounted in the inflow ducting\n• Two Temperature Modulating Valves (TMVs) mix cooled air from the heat exchangers with hot bleed air from the engines (PRSOVs)\n• Heat exchangers are cooled by ram air in flight or ground cooling fan on the ground\n• Each TMV independently controls cabin and cockpit duct temperatures\n\nTwo modes:\n• Auto: System controls TMVs automatically\n• Manual: Pilot controls duct temperatures via the AIR CONDITIONING panel"
  },
  {
    id: "seed-115",
    category: "Environmental Control",
    question: "What's the recommended max duct temperature in manual mode and why?",
    answer: "95°C (203°F) maximum.\n\nThis provides margin for pilot operation without triggering the overtemperature CAS messages. Duct temperatures display on the synoptic page to make it easier to manage manually."
  },
  {
    id: "seed-116",
    category: "Environmental Control",
    question: "What is the FCSOV (Flow Control Shutoff Valve) and what does it do?",
    answer: "The FCSOV regulates air flow quantity to maintain adequate and safe supply pressure at any engine operating condition."
  },
  {
    id: "seed-117",
    category: "Environmental Control",
    question: "How does the VCS (Vapor Cycle Air Conditioning System) work?",
    answer: "The VCS provides additional cooling and is automatically activated by the temperature control system when needed.\n\nComponents:\n• Vapor cycle machine with two independent refrigerant circuits (one for cabin, one for cockpit)\n• Both circuits share a single compressor and condenser\n• Each circuit has its own evaporator unit and pressure transducers for safe operation\n• Refrigerant: R134A\n\nHow it cools:\n• Refrigerant cycles through evaporation and condensation\n• Evaporators pull heat out of cabin and cockpit air\n• Condenser dumps the heat using ram air in flight or the ground cooling fan on the ground\n• Evaporator fans double as recirculation fans, providing uniform airflow and temperature"
  },
  {
    id: "seed-118",
    category: "Environmental Control",
    question: "How does the Emergency Ram Air Ventilation system work?",
    answer: "The system consists of a ventilation flap valve installed in the emergency ventilation duct, connecting it to the ram air duct.\n\nThe valve is normally closed. It opens when the BLEED knob is positioned to OFF VENT (which closes both PRSOVs) in flight."
  },
  {
    id: "seed-119",
    category: "Pressurization",
    question: "What does the Cabin Pressure Control System (CPCS) consist of?",
    answer: "Four components:\n\n1. Electronic Control and Monitoring Unit (ECMU)\n2. One Cabin Outflow Valve (OFV)\n3. One Negative Relief Valve (NRV)\n4. One Positive Relief Valve (PRV)\n\nThe CPCS operates in automatic and manual modes. Normal operation is automatic."
  },
  {
    id: "seed-120",
    category: "Pressurization",
    question: "What functions does the Cabin Pressure Control System (CPCS) provide?",
    answer: "Six functions:\n\n1. Cabin altitude limiting\n2. Cabin decompression (due to leakage) prevention\n3. Dump function for rapid cabin decompression\n4. Automatic control of cabin pressure, rate of change, and differential pressure\n5. Manual control of cabin pressure\n6. Ability to switch between automatic and manual control\n\nThe system operates up to a 41,000 ft ceiling (cabin altitude approximately 8,000 ft). The CABIN ALTITUDE HIGH alarm activates at 10,000 ft."
  },
  {
    id: "seed-121",
    category: "Pressurization",
    question: "What three conditions trigger the CPCS \"Flight Abort Mode,\" and what does it do?",
    answer: "All three conditions must be met:\n\n1. Aircraft altitude after takeoff has never exceeded 6,000 ft above the TO field elevation\n2. Aircraft flight time is less than 10 minutes\n3. Aircraft starts to descend\n\nWhen triggered, the CPCS sets the Landing Field Elevation (LFE) back to the takeoff LFE instead of the destination LFE. This schedules the cabin pressure properly and prevents the system from pressurizing to a different LFE.\n\nThis is the same Return-to-Field logic from your CAE notes."
  },
  {
    id: "seed-122",
    category: "Pressurization",
    question: "What does the Outflow Valve (OFV) do?",
    answer: "The OFV modulates airflow from the pressurized cabin to the surrounding environment.\n\nIt can be modulated automatically or manually."
  },
  {
    id: "seed-123",
    category: "Pressurization",
    question: "What are the Negative Relief Valve (NRV) and Positive Relief Valve (PRV) and when do they open?",
    answer: "Both are mechanically actuated valves that stay closed during normal operations.\n\nThey only open if the differential pressure limits are reached, to prevent over and under pressurization of the fuselage that could cause structural damage to the airplane."
  },
  {
    id: "seed-124",
    category: "Autopilot",
    question: "What conditions cause an abnormal autopilot disconnect?",
    answer: "Six conditions:\n\n1. Autopilot is not available\n2. Stall Warning is active\n3. Manual trim switch is active\n4. Backup Pitch Trim channel is selected\n5. Roll attitude is beyond ± 45 degrees\n6. Pitch attitude is beyond ± 25 degrees"
  },
  {
    id: "seed-125",
    category: "Autopilot",
    question: "How does the autopilot indicate a mistrim condition?",
    answer: "The system constantly monitors servo effort. When it exceeds a certain threshold, a mistrim is annunciated:\n\n• AP PITCH MISTRIM message is displayed (no other indication for pitch mistrim)\n• AP ROLL MISTRIM message is displayed, plus a yellow arrow on the roll trim indicator pointing in the direction of mistrim"
  },
  {
    id: "seed-126",
    category: "Autopilot",
    question: "What does the CWS (Control Wheel Steering) button do?",
    answer: "Pressing and holding CWS lets you hand-fly the airplane without disengaging the autopilot.\n\nWhile CWS is held:\n• Pitch and roll servos disengage from the flight control surfaces\n• Flight director synchronizes to airplane attitude during the maneuver\n• Pitch trim operation is interrupted\n• Yaw damper engagement is unaffected\n• The 'AP' annunciation is temporarily replaced by 'CWS' in white\n\nWhen you release CWS:\n• Autopilot re-engages with a new reference (depending on Flight Director active mode)"
  },
  {
    id: "seed-127",
    category: "Autopilot",
    question: "In FLC mode, how do you change the airspeed reference, and when does it auto-switch between IAS and Mach?",
    answer: "Two ways to change the airspeed reference:\n\n1. Use the SPD SEL knob\n2. Hand-fly to a new airspeed reference with the CWS button pressed\n\nAuto-switch between IAS and Mach:\n• Climb: IAS → Mach when 31,500 ft or 0.55 M is reached\n• Descent: Mach → IAS when 30,500 ft or 250 kt is reached"
  },
  {
    id: "seed-128",
    category: "Autopilot",
    question: "What is Low Bank Mode and how do you select it?",
    answer: "Low Bank Mode limits the flight director's maximum commanded roll angle to 15°.\n\nIt can be manually selected or deselected by pressing the BANK button while in Heading Select or Navigation Modes (GPS and VOR)."
  },
  {
    id: "seed-129",
    category: "Electrical",
    question: "What does the ELECTRICAL EMERGENCY BUTTON do when pushed in?",
    answer: "Pushing it in overrides the EPGDS (Electrical Power Generation and Distribution System) automatic transfer to the electrical emergency circuitry.\n\nThe batteries connect directly to the EMERGENCY BUS, regardless of any other command from the Electrical Distribution Logic."
  },
  {
    id: "seed-130",
    category: "Electrical",
    question: "What does the BUS TIE knob do in each of these positions?\n\n1. AUTO\n2. 1 OPEN\n3. 2 OPEN",
    answer: "AUTO: Allows the EPGDS (Electrical Power Generation and Distribution System) to automatically operate BTC1 and BTC2. Both buses are tied through the contactors during normal ops.\n\n1 OPEN: Opens BTC1, isolating DC BUS 1. BTC2 still operates automatically.\n\n2 OPEN: Opens BTC2, isolating DC BUS 2. BTC1 still operates automatically.\n\nWhat \"isolating a DC bus\" means: The Bus Tie Contactors normally connect the two networks so a single generator can power both DC BUS 1 and DC BUS 2 if needed. Opening a BTC breaks that cross-tie, so the affected DC bus is fed only from its own side. In any non-normal source configuration, the system also automatically drops the SHED BUS in flight to prevent overload on the remaining source.\n\nBTC = Bus Tie Contactor."
  },
  {
    id: "seed-131",
    category: "Electrical",
    question: "During normal operation with both BATT 1 and BATT 2 switches ON, where are the batteries connected and what charges them?",
    answer: "Battery 1: Connected to the EMERGENCY BUS, charged by SG 1 (Starter Generator 1).\n\nBattery 2: Connected to the CENTRAL BUS, charged by SG 2. Also provides electrical power for engine starting.\n\nIf not in an electrical emergency, the batteries are constantly charged by any source, including the GPU."
  },
  {
    id: "seed-132",
    category: "Electrical",
    question: "Where are the three Power Distribution Units (PDUs) located?",
    answer: "LPDU (Left Power Distribution Unit): Rear electronic bay (temperature and pressure controlled)\n\nRPDU (Right Power Distribution Unit): Rear electronic bay (temperature and pressure controlled)\n\nEPDU (Emergency Power Distribution Unit): Nose electronic bay (NOT temperature or pressure controlled)\n\nAdditional info: The PDUs are part of the EPGDS (Electrical Power Generation and Distribution System), which also includes two main DC channels, one external power receptacle, and two batteries. The PDUs are electrical-electronic integrated devices that handle power distribution, electrical load protection, and interface with other systems."
  },
  {
    id: "seed-133",
    category: "Electrical",
    question: "Which buses are on the LH and RH circuit breaker panels?",
    answer: "LH circuit breaker panels:\n• DC BUS 1\n• HOT BATT BUS 1 (main CB panel only)\n• EMERGENCY BUS\n\nRH circuit breaker panels:\n• DC BUS 2\n• HOT BATT BUS 2 (main CB panel only)\n• EMERGENCY BUS\n• SHED BUS"
  },
  {
    id: "seed-134",
    category: "Electrical",
    question: "What is the QSC (Quiet Start Contactor) and what does it do?",
    answer: "During a battery engine start, the QSC isolates Battery 2 from the rest of the electrical system. Battery 2 is then dedicated solely to powering the starter, while Battery 1 continues to power the rest of the airplane (avionics, displays, etc.).\n\nThis is what makes it a \"quiet\" start. The rest of the system doesn't experience the voltage sag from the heavy cranking load.\n\nDuring normal operation (engines running on SGs), the QSC is open along with the BTC1 and EBC2 in the split-bus configuration."
  },
  {
    id: "seed-135",
    category: "Fuel System",
    question: "What three things does the engine fuel system provide?",
    answer: "1. Fuel pressurization\n2. Filtering\n3. Heat exchange"
  },
  {
    id: "seed-136",
    category: "Fuel System",
    question: "How is the fuel tank divided, and how does fuel get from the wing to the engine?",
    answer: "Each side has 3 tanks:\n• Main tank\n• Collector tank\n• Surge tank\n\nPrimary ejector pump: Driven by high-pressure fuel from the engine. Delivers engine burn flow from the collector tank to the Fuel Metering Unit (FMU) inlet.\n\nTransfer ejector pump: Driven by primary ejector discharge pressure. Induces fuel from the wing to the collector tank, keeping the collector tank full until the wing tank is exhausted.\n\nEach engine has its own supply and dedicated piping."
  },
  {
    id: "seed-137",
    category: "Fuel System",
    question: "How is fuel pressurized for delivery to the engine?",
    answer: "A two-stage boost pump pressurizes the fuel. It includes:\n\n• An inducer\n• A regenerative pump\n\nBoth stages are driven by the AGB (Accessory Gearbox) drive gear. The pressurized fuel is then transferred to the AGB-mounted FOHE (Fuel/Oil Heat Exchanger) module."
  },
  {
    id: "seed-138",
    category: "Fuel System",
    question: "What is the FMU (Fuel Metering Unit) and what are its major functions?",
    answer: "The FMU is controlled by the FADEC. It meters and distributes the proper amount of fuel for combustion to the injectors under all operating conditions. It also controls the shutoff valve used during normal shutdowns and provides uncontrolled thrust protection.\n\nMajor functions:\n\n1. Pressurization of fuel supply\n2. Regulation of burn fuel flow\n3. Division of primary and secondary flow\n4. Engine shutdown in normal and shaft shear circumstances\n5. Supply of motive fuel flow for airframe usage\n6. Prevention of discharge of fuel after engine shutdown"
  },
  {
    id: "seed-139",
    category: "Engines",
    question: "What does the oil filter do, and what happens if it gets clogged?",
    answer: "The oil filter traps foreign particles picked up by the oil as it lubricates the engine components.\n\nIf the filter becomes clogged, an internal filter bypass allows oil flow to continue through the system at the normal rate, preventing oil starvation.\n\nThe filter impending bypass switch monitors differential pressure across the filter. An internal mechanism prevents the switch from actuating when the oil is cold and viscous (so you don't get false warnings on a cold start).\n\nThe oil filter and its electrical monitoring sensors are combined in an oil filter module mounted on the left side of the oil tank."
  },
  {
    id: "seed-140",
    category: "Engines",
    question: "How do you know visually that the oil filter needs to be replaced?",
    answer: "The oil filter impending bypass indicator is installed on the oil filter itself. A red button pops up to indicate that the oil filter must be replaced."
  },
  {
    id: "seed-141",
    category: "FADEC",
    question: "When will the FADEC automatically command both igniters on?",
    answer: "Two situations:\n\n1. On the ground with temperatures below 0°C (32°F)\n2. Doing a start while airborne"
  },
  {
    id: "seed-142",
    category: "FADEC",
    question: "At what altitude does the FADEC use Swing Start logic, and how does it work?",
    answer: "Swing Start is used for in-flight starts above 15,000 ft to improve relighting performance.\n\nHow it works:\n\nInstead of running the starter continuously, the FADEC cycles the starter on and off to keep N2 speed within a window that maximizes the chance of relight:\n\n• High threshold: 10% N2 (or 11.5% during an Electrical Emergency Start)\n• Low threshold: Varies based on altitude\n\nThe cycle:\n1. Starter ON until N2 hits the high threshold\n2. If no relight is detected, starter turns OFF\n3. N2 decays until it hits the low threshold\n4. Starter turns back ON, N2 builds back to high threshold\n5. Repeat\n\nLimits:\n• FADEC performs this cycle up to 3 times\n• After the third cycle, the starter stays ON, and it's the crew's responsibility to abort the start\n• Fuel flow and ignition stay commanded throughout the swing\n\nIf relight is detected at any point: The starter stays ON until N2 reaches 44%."
  },
  {
    id: "seed-143",
    category: "FADEC",
    question: "When will moving the ENG START/STOP knob to STOP NOT shut down the engine?",
    answer: "If the ENG START/STOP knob is moved to STOP but the thrust lever (TLA) is not reduced to idle within 5 seconds, the FADEC will disregard the STOP selection and will not shut down the engine.\n\nThis is a safety feature to prevent engine shutdown due to spurious commands.\n\nTo shut down normally, both must occur: TLA at idle AND ENG START/STOP knob to STOP.\n\nIn an emergency, the engine fuel SHUTOFF button can also be used to cut off fuel to the engine."
  },
  {
    id: "seed-144",
    category: "FADEC",
    question: "What does the FADEC do, and how does it control thrust?",
    answer: "The FADEC (Full Authority Digital Engine Control) controls engine operation, performance, and efficiency through full and progressive modulation in response to TLA (Thrust Lever Angle) movements. It also provides engine limit protection during ground starting.\n\nHow it controls thrust:\n\n• Above idle: Engine thrust is directly related to N1 speed. FADEC calculates an N1 setting based on TLA position and compensates for ambient temperature, pressure altitude, bleed valve position, and operating modes.\n\n• At idle: N2 is in thrust control, providing N2 governed idle speed."
  },
  {
    id: "seed-145",
    category: "FADEC",
    question: "How does the FADEC's two-channel architecture work?",
    answer: "The FADEC has two identical isolated channels.\n\n• One channel is in-control, providing the electronic control outputs\n• The other channel runs in standby, processing all inputs and software, ready to take over if the active channel fails\n• Built-in test features trigger an automatic channel switchover when a critical internal component malfunction is detected\n• During operation with both channels healthy, the software alternates which channel is in control with each engine start"
  },
  {
    id: "seed-146",
    category: "FADEC",
    question: "How is the FADEC powered, and what's the backup power source?",
    answer: "The FADEC is primarily powered by a 28 VDC source.\n\nOnce the engine has achieved idle speed, if a failure or interruption occurs on the power source supply, both FADEC channels automatically revert to the engine-driven PMA (Permanent Magnet Alternator).\n\nBoth FADEC Channel A's are also connected to the EMERGENCY BUS, which assures power supply for engine starting during electrical emergency conditions."
  },
  {
    id: "seed-147",
    category: "FADEC",
    question: "What is ATR (Automatic Thrust Reserve), and what activates it?",
    answer: "The ATR is controlled by the FADEC. When armed, it automatically provides maximum engine thrust reserve (TO RSV) under specific conditions.\n\nATR auto-activates when armed AND thrust levers are at least at TO/GA position AND any of these occur:\n• N1 difference between engines is greater than 20%\n• Loss of communication between both engines\n• One engine failure during takeoff\n\nATR also activates whenever both engines are operating and both thrust levers are positioned to MAX (with ATR armed).\n\nSelection: ATR status (ON/OFF) is selected via the MFD bezel on the Takeoff Data Set Menu. If no selection is made before takeoff, the system defaults to ON.\n\nIndication when ATR activates:\n• Green ATR indication on the MFD disappears\n• Cyan thrust mode displays with an additional \"RSV\" indication"
  },
  {
    id: "seed-148",
    category: "FADEC",
    question: "What are the five idle mode selections?",
    answer: "1. Flight Idle without Anti-Ice\n2. Flight Idle with Anti-Ice\n3. Approach Idle without Anti-Ice\n4. Approach Idle with Anti-Ice\n5. Ground Idle\n\nIdle mode is automatically selected by the FADEC based on inputs from the airplane."
  },
  {
    id: "seed-149",
    category: "FADEC",
    question: "When does Flight Idle activate, and what does it provide?",
    answer: "Activation conditions (both required):\n• Weight off wheels\n• Approach idle NOT selected\n\nWhat it provides:\nThe minimum thrust necessary to provide minimum engine bleed pressure to the airplane.\n\nFlight Idle N2 provides a mechanical governing reference as a function of altitude and can change based on anti-ice bleed requirements."
  },
  {
    id: "seed-150",
    category: "FADEC",
    question: "When does Approach Idle activate, and how does it differ from Flight Idle?",
    answer: "Activation conditions (both required):\n• Weight off wheels\n• Approach mode set (flaps at position 1 or greater, OR landing gear down and locked)\n\nKey difference from Flight Idle:\nApproach Idle is the same as Flight Idle without Anti-Ice, regardless of the engine ice protection switch position. So even with anti-ice on, you get the same N2 governing reference as you would without anti-ice.\n\nIt also provides mechanical N2 governing as a function of altitude."
  },
  {
    id: "seed-151",
    category: "FADEC",
    question: "What is Ground Idle?",
    answer: "Ground Idle is the minimum thrust setting.\n\nIt provides a stable and minimum engine thrust level for ground operations."
  },
  {
    id: "seed-152",
    category: "FADEC",
    question: "What is the TT0 probe heating system, and when does it activate?",
    answer: "The TT0 probe is mounted in the engine inlet duct and contains two independent resistance temperature devices that feed temperature data to each FADEC channel.\n\nWhy it's heated: To avoid significant loss of thrust when operating in icing conditions.\n\nTT0 heater activates when BOTH of these are true:\n• TT0 reading is below 10°C with the engine running on ground, OR TT0 is below 15°C in the air\n• ENG 1 and ENG 2 Switches (Ice Protection) are selected ON\n\nIce crystal detection (FADEC software 5.3 and on):\n• Active above 4,000 ft where ice crystal formations are more likely\n• After ENG 1 and ENG 2 switches are turned ON, if the ice does not melt, the CAS message \"E1 (2) TT0 PROBE ICE\" is triggered after 2 minutes"
  },
  {
    id: "seed-153",
    category: "Fire",
    question: "Which electrical buses power the Engine Fire Protection System?",
    answer: "Two buses:\n\n• Engine fire detection: EMERGENCY BUS\n• Engine fire extinguishing: HOT BATT BUS 1\n\nThe Engine Fire Protection System provides both fire detection and extinguishing."
  },
  {
    id: "seed-154",
    category: "Fire",
    question: "What does the engine fire detector system look like, and how is it wired?",
    answer: "Each engine has a single loop fire detector installed in close proximity to the main flammable fluid components inside the engine cowl. This placement maximizes the chance of detecting an engine compartment overheat or fire.\n\nWiring:\n• Engine 1 loop connects to GEA 1 (Garmin Engine and Airframe unit)\n• Engine 2 loop connects to GEA 2\n• Both GEAs receive and process the electrical signals\n\nThe system detects both overheat AND fire conditions. A CAS message displays if a fault is detected in the fire detector system itself."
  },
  {
    id: "seed-155",
    category: "Fire",
    question: "What indications do you get in the event of an engine fire or overheat?",
    answer: "Four indications:\n\n1. Aural warning sounds\n2. \"FIRE\" icon displayed in the respective engine ITT indication\n3. CAS messages displayed\n4. SHUTOFF button lights red indicating the FIRE condition (red light remains ON while the fire condition persists)\n\nThe fire button on the test control panel simulates a fire condition on the engines and activates the fire alarms, used to verify integrity of the detection system."
  },
  {
    id: "seed-156",
    category: "Fire",
    question: "What happens when you push an engine SHUTOFF button (SHUTOFF 1 or 2)?",
    answer: "Three things happen:\n\n1. Closes the respective side fuel and bleed shutoff valves\n2. Enables the fire extinguisher bottle discharge (arms the bottle, doesn't fire it yet)\n3. A white strip lights up to indicate the SHUTOFF button has been pressed\n\nThe ENG FIRE EXTINGUISHER control panel has one SHUTOFF button per engine plus the BOTTLE (extinguishing) switch."
  },
  {
    id: "seed-157",
    category: "Fire",
    question: "After pushing SHUTOFF and discharging the bottle, how do you know the fire is still active?",
    answer: "Four indications continue if the fire/overheat condition persists:\n\n1. SHUTOFF button red light stays on\n2. \"FIRE\" message in the ITT field on the EICAS continues\n3. CAS message E1 (2) FIRE in the CAS window continues\n4. Aural warning FIRE is still heard"
  },
  {
    id: "seed-158",
    category: "Fire",
    question: "What happens when you set the BOTTLE switch to DISCH?",
    answer: "Two things:\n\n1. Extinguishing agent is released to the engine that was selected by the SHUTOFF button\n2. The CAS message ENG FIREX DISCH comes into view in the CAS window\n\nThe bottle only discharges to the engine whose SHUTOFF button was pressed. That's why selecting the right SHUTOFF button first matters."
  },
  {
    id: "seed-159",
    category: "Fire",
    question: "How do you know the fire/overheat condition has been extinguished?",
    answer: "Four indications go away:\n\n1. FIRE message disappears from the ITT field of the EICAS\n2. SHUTOFF button red light goes off\n3. CAS message E1 (2) FIRE goes out of view from the CAS window\n4. Aural FIRE warning is cancelled"
  },
  {
    id: "seed-160",
    category: "Controls",
    question: "What is the Pitch Trim System made up of?",
    answer: "Two components:\n\n1. Trim Actuator Controller (TAC)\n2. Trim Actuation System\n\nThe TAC's job:\n• Processes input commands from the airplane\n• Controls actuation of the trim\n• Monitors the trim system\n• Ignores trim commands while the Quick Disconnect button is pressed\n\nThe system can operate in normal or backup mode."
  },
  {
    id: "seed-161",
    category: "Controls",
    question: "What is the 3-second pitch trim limit, and why does it exist?",
    answer: "The TAC (Trim Actuator Controller) imposes a 3-second limit on any pitch trim command.\n\nIf you need to continue trimming after 3 seconds, you must release the switch and press it again.\n\nThis prevents a stuck or runaway trim switch from continuously trimming the airplane out of position."
  },
  {
    id: "seed-162",
    category: "Controls",
    question: "How does Normal Mode pitch trim work, and what is the command priority order?",
    answer: "Normal mode is engaged when the Pitch Trim MODE switch is at the OFF position on the TRIM control panel.\n\nIn normal mode, the pitch trim can be operated by:\n• Manual electric trim (pilot or copilot pitch trim switches)\n• Auto Trim (when autopilot is engaged)\n\nPosition indication of each pitch trim tab is shown on the MFD. Trim rate is high or low based on airspeed.\n\nCommand priority order:\n1. Pilot pitch trim switch\n2. Copilot pitch trim switch\n3. Auto Trim"
  },
  {
    id: "seed-163",
    category: "Controls",
    question: "How does Manual Electric Pitch Trim physically move the trim tabs?",
    answer: "The crew commands trim through the pitch trim switches on the control wheels.\n\nSignal path:\n1. Switch command → avionics\n2. Avionics → TAC 1 (Trim Actuator Controller)\n3. TAC 1 operates the LH actuator attached to the left elevator trim tab\n\nMaster/slave configuration:\nThe LH actuator is the master. When it operates, it drives the RH actuator (right elevator trim tab) through an interconnecting flex shaft.\n\nAuto Trim:\nWhen the autopilot is engaged, automatic pitch trim commands the PTA (Pitch Trim Actuator) to relieve the elevator servo effort being maintained."
  },
  {
    id: "seed-164",
    category: "Controls",
    question: "How does Backup Mode pitch trim work, and when do you use it?",
    answer: "Use it when: The CAS message PTRIM NML FAIL indicates a pitch trim normal mode failure. The pilot or co-pilot sets the Pitch Trim MODE switch to BKP on the TRIM control panel.\n\nImportant limitation: Auto Trim does NOT work in backup mode. Manual only.\n\nSignal path (different from normal mode):\n• Commands come from the pitch trim backup switch\n• Signals go directly to TAC 2 (not TAC 1)\n• TAC 2 operates the RH actuator as the master\n• RH actuator then drives the LH actuator through the flex shaft (master/slave is reversed from normal mode)\n\nTrim rate: Fixed medium rate (no high/low based on airspeed like in normal mode)."
  },
  {
    id: "seed-165",
    category: "Controls",
    question: "What is the flap system, and what components make up the Flap Actuation System (FAS)?",
    answer: "The flap system has one fowler flap panel on each wing (2 panels total).\n\nThe flaps are commanded by the Flap Actuation System (FAS), a complete electromechanical system with electronic synchronization for position monitoring and control.\n\nFAS components:\n\n1. Flap Selector Lever (FSL)\n2. Flap System Control Unit (FSCU)\n3. Flap Linear Actuator (FLA)\n4. Flap Position Sensor Unit (FPSU)"
  },
  {
    id: "seed-166",
    category: "Instruments",
    question: "What is the ADS (Air Data System) and what are the three systems?",
    answer: "The ADS provides primary air data information to the PFDs, MFD, IESI, flight controls, and other avionics as required.\n\nThree ADS systems:\n\n1. ADS 1: Pitot 1, Static port 1 (S2), Static port 2 (S1), and ADC 1\n2. ADS 2: Pitot 2, Static port 2 (S2), Static port 1 (S1), and ADC 2\n3. ADS Standby: Pitot-static and IESI\n\nWhat the ADC computes: It receives data from the appropriate sensors and provides:\n• Pressure altitude\n• Vertical speed\n• Airspeed values\n• Air temperature information\n• Density altitude\n\nThese outputs are used by various airplane systems."
  },
  {
    id: "seed-167",
    category: "Instruments",
    question: "Which ADS feeds each display normally, and how does reversion work if an ADC fails?",
    answer: "Normal operation:\n• PFD 1 and MFD: ADS 1\n• PFD 2: ADS 2\n\nReversion logic if ADC 1 fails:\n• PFD 1 automatically reverts to ADC 2\n• If ADC 2 then also fails, PFD 1 reverts to ADC Standby (this also applies during electrical emergency)\n\nSame logic applies if ADC 2 fails first.\n\nManual reversion to a different operative ADC is also available during normal and abnormal operations."
  },
  {
    id: "seed-168",
    category: "Instruments",
    question: "What three main functions does the IESI (Integrated Electronic Standby Instrument) compute and display?",
    answer: "1. Attitude (pitch and roll)\n2. Barometric pressure (standard or barometric-corrected)\n3. Indicated airspeed"
  },
  {
    id: "seed-169",
    category: "Instruments",
    question: "What secondary functions does the IESI display?",
    answer: "Eight secondary functions/displays:\n\n1. Indicated Mach number\n2. VMO/MMO\n3. Lateral acceleration/slip indication\n4. Vertical speed\n5. ILS\n6. Barometric pressure\n7. Altitude in meters\n8. Heading"
  },
  {
    id: "seed-170",
    category: "Instruments",
    question: "How is the IESI powered, and what's the rule about its 90-second alignment?",
    answer: "Power:\n• IESI is powered whenever the airplane is energized\n• Primarily powered by the EMERGENCY BUS\n• During an electrical emergency, continues to operate on batteries\n• If the EMERGENCY BUS fails, automatically switches to DC BUS 1\n\nAlignment phase:\n• Takes about 90 seconds to complete after power-up\n• Identified on the screen by the ALIGNING flag\n\nCritical rule:\nThe airplane must NOT be moved during the first 90 seconds after power-up while the IESI is aligning. Moving the airplane during alignment can cause in-flight attitude indication errors that are not noticeable on ground."
  },
  {
    id: "seed-171",
    category: "Instruments",
    question: "What is the AHRS, and what two systems are installed?",
    answer: "The AHRS (Attitude and Heading Reference System) provides accurate attitude, accelerations, rates, and heading information to the flight crew.\n\nTwo identical, independent systems:\n• AHRS 1: Source data from GRS 1 and GMU 1\n• AHRS 2: Source data from GRS 2 and GMU 2"
  },
  {
    id: "seed-172",
    category: "Instruments",
    question: "Which AHRS feeds each display normally, and how do you change the source?",
    answer: "Normal source assignment:\n• AHRS 1 is the primary source for PFD 1, MFD, and IESI\n• AHRS 2 is the primary source for PFD 2\n\nChanging source: AHRS source selection is available through the softkeys at the bottom of the PFDs."
  },
  {
    id: "seed-173",
    category: "Instruments",
    question: "What components make up each AHRS, and what role does each play?",
    answer: "Each AHRS is made up of two components:\n\nGRS (Garmin Reference System):\n• Uses a combination of internal solid-state sensors and external input data to determine airplane heading and attitude\n• External inputs: magnetometer, one air data computer, and two GPS units\n• Powers the GMU\n\nGMU (Garmin Magnetometer Unit):\n• Provides magnetic information to the GRS\n• Powered by the GRS\n• On ground, the GMU may be affected by magnetic sources or metallic structures"
  },
  {
    id: "seed-174",
    category: "Instruments",
    question: "How does AHRS reversion work if one AHRS fails?",
    answer: "If AHRS 1 fails:\n• PFD 1 automatically reverts to AHRS 2\n• If AHRS 2 then also fails, PFD 1 reverts to IESI (this also applies during electrical emergency)\n\nSame reversionary logic applies if AHRS 2 fails first."
  },
  {
    id: "seed-175",
    category: "Avionics",
    question: "Where are the two VHF antennas installed?",
    answer: "VHF 1: Top of the fuselage\nVHF 2: Bottom of the fuselage\n\nAdditional info:\nThe antennas are installed as far apart as possible on the fuselage, but the airplane size doesn't allow enough space to fully avoid VHF interference. To minimize interference, the system attenuates the received signal on one antenna while the other is transmitting.\n\nDepending on signal power, this attenuation may cut the reception signal of the radio that's not transmitting. If the received signal has enough power (the airplane and transmitting station are closer), the crew will still receive the communication normally."
  },
  {
    id: "seed-176",
    category: "Avionics",
    question: "What does the CVDR record, and how much can it hold?",
    answer: "The CVDR (Cockpit Voice and Data Recorder) combines Flight Data Recorder and Cockpit Voice Recorder functions in a single solid state LRU.\n\nRecording capacity:\n\nAudio: Most recent 120 minutes from four input channels (only 3 used)\n• 1 channel from the Cockpit Area Microphone (CAM)\n• 2 channels from the primary crew microphones\n• Includes voice communications, radio audio, mic signals, and Nav ident signals sent to headsets or speakers\n\nFlight Data: Most recent 25 hours at a rate of 256 data words per second"
  },
  {
    id: "seed-177",
    category: "Avionics",
    question: "What is the Underwater Locator Device (ULD), and how long does its battery last?",
    answer: "Each CVDR and FDR has one ULD equipped with a battery that has a life expectancy of 6 years.\n\nThe ULD helps locate the recorders if the airplane is submerged."
  },
  {
    id: "seed-178",
    category: "Avionics",
    question: "What is the purpose of the impact switch on the CVDR and FDR?",
    answer: "The impact switches remove electrical power from the recording system when the airplane experiences an impact.\n\nThis preserves the most recent recording instead of letting it be overwritten by continued operation after a crash."
  },
  {
    id: "seed-179",
    category: "Avionics",
    question: "How and when do you perform the CVR pre-flight test, and what indicates a pass?",
    answer: "When to perform:\n• Before every flight, OR\n• After any maintenance that may have affected the CVR function\n\nConditions required for the indications to be visible:\n• VDR Lever Lock Switch in TEST HOLD 5 SEC position\n• WOW is TRUE (on ground)\n• Parking Brake is set\n\nHow to test:\n1. Wait at least 60 seconds after power-on\n2. Hold the VDR Lever Lock Switch in the TEST HOLD 5 SEC position for a minimum of 5 seconds\n\nPass indication:\n• A tone is audible through the crew headsets (must be connected to the VDR panel)\n• The CVR PASS indication on the VDR panel turns green"
  },
  {
    id: "seed-180",
    category: "Fuel System",
    question: "How is the fuel tank vented, and what does the float valve do?",
    answer: "The vent system keeps the differential pressure between the tank and ambient within structural limits and prevents fuel spillage during flight maneuvers and abrupt braking.\n\nVent path:\n• Each fuel tank is vented through a NACA air inlet/outlet flush intake in the lower surface of the wing\n• Located 1.9 meters inboard of the wing tip\n• Vent lines provide adequate capacity, supplemented by a float valve to protect from overpressurization\n\nFloat valve operation:\n• Fuel level decreases (in the wing tank): float valve opens to vent pressure from the outboard area of the wing tank\n• Fuel level rises (due to maneuvers or refueling): float valve closes to prevent fuel spillage into the surge tank"
  },
  {
    id: "seed-181",
    category: "Fuel System",
    question: "How is fuel quantity measured, and what happens if you lose one wing tank quantity indication?",
    answer: "A capacitive system measures fuel quantity in each tank. The system is self-calibrated and requires no adjustment.\n\nThe signal from each tank is processed through a fully segregated channel of the EFCU (Electronic Fuel Control Unit) and transmitted to the cockpit.\n\nIf you lose one wing tank quantity indication, the total tank quantity indication will also be lost."
  },
  {
    id: "seed-182",
    category: "Fuel System",
    question: "Where is the fuel temperature sensor located?",
    answer: "In the left collector tank.\n\nThe EFCU monitors the resistance value of the sensor and provides the fuel temperature for display on the MFD."
  },
  {
    id: "seed-183",
    category: "Fuel System",
    question: "What pumps are in each engine fuel feed system?",
    answer: "Three pumps in each fuel tank:\n\n1. Ejector fuel pump (primary, no moving parts, powered by engine motive flow)\n2. Scavenge ejector pump\n3. Electric fuel boost pump (DC auxiliary)\n\nThe left and right engine fuel feed systems are completely independent. Closing one engine's fuel shutoff valve does not affect fuel availability to the other engine."
  },
  {
    id: "seed-184",
    category: "Fuel System",
    question: "How does the EFCU (Electronic Fuel Control Unit) get powered?",
    answer: "Two channels with separate power:\n\n• Left channel: EMERGENCY BUS\n• Right channel: DC BUS 2\n\nThe DC auxiliary pumps in each collector tank are also powered by the EMERGENCY BUS and controlled by the EFCU."
  },
  {
    id: "seed-185",
    category: "Fuel System",
    question: "What does each pump in the fuel feed system do?",
    answer: "Ejector fuel pump: Primary pump. Venturi (jet pump) design with no moving parts, powered by engine motive flow. Self-sustained, requires no electrical power.\n\nScavenge pump: Maintains fuel level in the collector tank, even during uncoordinated maneuvers. Ensures constant fuel flow to the engine during normal flight.\n\nElectric fuel boost pump: Installed in each wing collector tank. Provides pressurized fuel for engine starting. During start or low pressure conditions, the EFCU automatically controls operation when the FUEL PUMP switch is in AUTO."
  },
  {
    id: "seed-186",
    category: "Fuel System",
    question: "Is there crossfeed between engines, and how is fuel imbalance corrected?",
    answer: "No crossfeed capability between engine fuel feed systems.\n\nIn the event of fuel imbalance (e.g. after engine failure), lateral balance is maintained by gravity transfer through the interwing fuel transfer valve.\n\nProcedure:\n1. Level the wings and trim the airplane correctly BEFORE opening the fuel transfer valve.\n2. With the transfer valve open, if imbalance doesn't correct, apply short-period rudder pedal or rudder trim inputs to produce a sideslip toward the heavy wing.\n\nExample: If the left wing is heavy, apply left rudder pedal or yaw trim to the left."
  },
  {
    id: "seed-187",
    category: "Fuel System",
    question: "What is the fuel shutoff valve and when does it close?",
    answer: "The fuel shutoff valve is installed in each wing feed line to prevent hazardous quantities of fuel from flowing into the fire zones.\n\nNormally open. Only closes when the fire shutoff pushbutton in the cockpit is actuated."
  },
  {
    id: "seed-188",
    category: "Fuel System",
    question: "What fuel-related warnings does the EFCU provide?",
    answer: "Five warnings:\n\n1. Each collector tank level is below 90 kg (198 lb)\n2. Imbalance between both wing tanks reaches 100 kg (220 lb)\n3. Low pressure at each engine inlet\n4. Pressure switch fail to detect low pressure at each engine inlet\n5. Fuel level exceeds maximum allowed limit in the tank when the interwing transfer valve opens"
  },
  {
    id: "seed-189",
    category: "Fuel System",
    question: "How is the airplane refueled and defueled?",
    answer: "Refueling:\n• Done via a gravity filler neck on the top surface of each wing, which prevents fuel capacity exceedance\n• If complete refueling isn't needed, you can fill both wings from one side by opening the interwing transfer valve, up to 60% of total fuel capacity\n\nDefueling:\n• Done via a dump valve located under each wing\n• Connect an appropriate device and hose\n• A water drain valve is fitted inside each dump valve"
  },
  {
    id: "seed-190",
    category: "Hydraulic",
    question: "What does the Phenom 100 Hydraulic Power Generation System consist of, and what does it operate?",
    answer: "Components:\n1. Hydraulic power pack\n2. Hydraulic accumulator\n3. Nitrogen charging valve\n4. Pressure gauge\n5. Temperature switch\n\nWhat it operates:\n• Landing gear\n• Brakes\n• Emergency brake"
  },
  {
    id: "seed-191",
    category: "Hydraulic",
    question: "What kind of hydraulic pump does the Phenom 100 use, and what's its operating pressure?",
    answer: "A single positive fixed displacement pump of the vane type.\n\nOperating pressure: 3,000 psig (nominal)\n\nThe pump is located in the reservoir and is driven by an electric motor."
  },
  {
    id: "seed-192",
    category: "Hydraulic",
    question: "What bus powers the hydraulic pump motor?",
    answer: "The hydraulic pump is driven by a brush-type 28 VDC electric motor powered from the Central Bus.\n\nIn normal operation, the Central Bus is fed by DC Bus 2 through Generator 2.\n\nAdditional info:\n• A coupling between the motor and pump transmits torque\n• The motor has thermal protection that automatically shuts it off in case of overload or locked rotor\n• A ventilation system keeps the electric motor within the adequate temperature range on the ground"
  },
  {
    id: "seed-193",
    category: "Hydraulic",
    question: "How does the hydraulic motor cooling fan work, and when does it run?",
    answer: "What it does:\nA fan admits air from the nose landing gear bay and spreads it across the electric motor case through ducts.\n\nPower source: DC Bus 2\n\nTurns ON automatically when:\n• Nose landing gear locks down, AND\n• At least one electric generator is ON\n\nTurns OFF automatically when:\n• Nose landing gear unlocks down (gear up), OR\n• Both electric generators are OFF"
  },
  {
    id: "seed-194",
    category: "Ice Protection",
    question: "What systems make up the Phenom 100 ice and rain protection system?",
    answer: "Five systems:\n\n1. Wing and Stabilizer De-Ice System\n2. Engine Anti-Ice System\n3. Windshield Heating System\n4. Windshield Rain Protection System\n5. ADS Probes Heating System"
  },
  {
    id: "seed-195",
    category: "Ice Protection",
    question: "How does bleed air flow to the wing and stabilizer de-ice system in normal operation?",
    answer: "Both engines supply bleed air to a common manifold at the pressure regulator valve inlet.\n\nThe bleed air then passes through a heat exchanger to be warmed before entering the de-ice system."
  },
  {
    id: "seed-196",
    category: "Ice Protection",
    question: "Walk through the wing and stabilizer de-ice cycle. What inflates first, and what's the timing?",
    answer: "When the WINGSTB switch is ON, the system runs an automatic 1-minute cycle:\n\nSequence (6 seconds inflation each):\n\n1. Horizontal stabilizer — EFCV energizes, de-icer inflates for 6 seconds, then EFCV de-energizes and vacuum is applied\n2. Outboard wing section — same 6-second inflation, then vacuum\n3. Inboard wing section — same 6-second inflation, then vacuum\n\nAfter all three sections inflate:\n• All EFCVs are de-energized\n• Vacuum is applied to all de-icers for the remaining 42 seconds\n\nTotal cycle: 60 seconds (3 × 6 sec inflation + 42 sec vacuum hold)\n\nIf the WINGSTB switch stays ON, the cycle repeats. It continues until the switch is turned OFF."
  },
  {
    id: "seed-197",
    category: "Ice Protection",
    question: "What happens when you momentarily move the WINGSTB switch from OFF to ON?",
    answer: "The controller operates in single cycle mode.\n\nIt cycles through all EFCVs (stabilizer, outboard wing, inboard wing) plus a 6-second dwell time, then shuts off.\n\nUseful for a one-shot de-ice without leaving the system continuously cycling."
  },
  {
    id: "seed-198",
    category: "Ice Protection",
    question: "What happens to the stall warning system when WINGSTB is turned ON, and why does it matter?",
    answer: "What happens:\n• Stall warning system activation angles are anticipated (triggered earlier)\n• This means higher stall warning speeds in the airplane\n• The CAS message SWPS ICE SPEED displays on the MFD\n\nWhy it matters:\nBecause stall speed effectively increases when WINGSTB is ON, you must comply with the AFM limitation minimum airspeed for WINGSTB switch activation before turning the system ON.\n\nThis guarantees the airplane is faster than the new (higher) stall warning speeds."
  },
  {
    id: "seed-199",
    category: "Ice Protection",
    question: "How does the Engine Anti-Ice System work, and can engines share bleed air for it?",
    answer: "The system removes or prevents ice formation around the engine inlet cowls (lip) using hot bleed air from the related engine compressor (dedicated bleed port).\n\nBleed air supply:\n• Always available to the system when the engine is running\n• Each Engine Anti-Ice system is independent of the other engine\n• Bleed air cannot be shared between engines"
  },
  {
    id: "seed-200",
    category: "Ice Protection",
    question: "What are the components of the Engine Anti-Ice System?",
    answer: "Six components:\n\n1. Supply duct\n2. Shutoff valve (EAI valve)\n3. Flow limiter (venturi)\n4. Pressure transducer\n5. Piccolo tube\n6. Exhaust vent"
  },
  {
    id: "seed-201",
    category: "Ice Protection",
    question: "How is the EAI (Engine Anti-Ice) valve actuated, and what is its fail-safe position?",
    answer: "The EAI valve is electrically controlled and pneumatically actuated.\n\nTo close the valve: The actuating solenoid must be energized.\n\nFail-safe position: With no electrical signal, the valve fails open. This ensures bleed air keeps flowing to anti-ice the engine even if power is lost.\n\nDispatch: The valve may be locked open to allow dispatch into icing conditions. Procedures are in the dispatch documents."
  },
  {
    id: "seed-202",
    category: "Ice Protection",
    question: "What is the D-chamber and how does the piccolo tube heat the engine inlet?",
    answer: "D-chamber: The space formed by the inner surface of the engine inlet lip skin and the forward bulkhead.\n\nPiccolo tube operation:\n1. Anti-ice air enters the inlet connection and passes into the circular piccolo tube mounted inside the D-chamber\n2. Air fills the piccolo tube and exits through holes along its length\n3. The exiting air distributes over the inner surface of the inlet lip skin\n4. The lip skin heats up, preventing ice formation on the outer surface\n\nAfter heating the lip, the air flows toward the bottom and exits the D-chamber through an exhaust vent to the atmosphere."
  },
  {
    id: "seed-203",
    category: "Ice Protection",
    question: "What does the windshield heating system look like, and how does each subsystem work?",
    answer: "The system consists of four independent subsystems (two per windshield).\n\nEach subsystem includes:\n• A heater mat integrated into the windshield\n• Two temperature sensors regulated by a Windshield Heating Control Unit (WHCU) channel\n\nSensor roles:\n• One sensor is used for control\n• The other monitors for overheats AND serves as backup for control if the first sensor fails"
  },
  {
    id: "seed-204",
    category: "Ice Protection",
    question: "If one starter generator fails, which windshield section gets heated and why?",
    answer: "The WHCU (Windshield Heating Control Unit) uses generator ON/OFF status to control the system. With a single power source, the left windshield side has priority:\n\n• If GEN 1 fails: The left section of the left windshield is heated\n• If GEN 2 fails: The right section of the left windshield is heated\n\nEither way, the pilot's side gets heat first."
  },
  {
    id: "seed-205",
    category: "Ice Protection",
    question: "What does the ADS probes heating system protect, and how does it work?",
    answer: "The system prevents ice formation on:\n\n1. Pitot probes\n2. Dual static ports\n3. Standby pitot\n4. AOA sensors\n\nHow it works:\nBuilt-in heating elements with self-regulating controls. The regulator controls the amount of power dissipated by the heater, keeping each probe free from ice accumulation throughout operating conditions.\n\nThis ensures precise readings on the associated instruments."
  },
  {
    id: "seed-206",
    category: "Landing Gear",
    question: "What does the WARNING HORN button do?",
    answer: "It allows you to inhibit the landing gear warning, but only when both of these are true:\n\n• The landing flap (full flaps) is not selected, AND\n• The difference between airplane altitude and LFE (Landing Field Elevation) is lower than 700 ft\n\nThis lets you silence the gear horn when descending into a field with non-standard flap configuration."
  },
  {
    id: "seed-207",
    category: "Landing Gear",
    question: "What are the main elements of the nose landing gear?",
    answer: "Several major elements:\n\nShock strut (with these components):\n• Main fitting\n• Turning cylinder\n• Sliding tube, tire fork, and wheel axle\n• Torque links\n\nOther elements:\n• Shimmy damper\n• Retraction actuator\n• Drag brace (resists drag loads)\n• Locking stay (locks the drag brace)\n• Down lock release actuator\n• Doors mechanism\n• Hydraulic pipes and hoses\n• Electrical harness"
  },
  {
    id: "seed-208",
    category: "Landing Gear",
    question: "What do the torque links do, and what happens when you disconnect them?",
    answer: "Function:\nThe torque links connect the turning cylinder and the NLG fork. They transfer steering rotational movement from the steering device to the NLG wheel.\n\nDisconnecting:\nThe torque links can be disconnected from the NLG fork by removing a lock pin. With the torque link disconnected, the nose wheel can rotate 360 degrees.\n\nThis is useful for towing in tight spaces."
  },
  {
    id: "seed-209",
    category: "Landing Gear",
    question: "What does the shimmy damper do and how is it mounted?",
    answer: "Function:\nThe shimmy damper reduces possible vibration between the turning cylinder and the main fitting (the rotation movement) that can be induced during rolling on the ground.\n\nMounting:\n• Housing → connected to the main fitting\n• Axle → connected to the torque link"
  },
  {
    id: "seed-210",
    category: "Landing Gear",
    question: "Where is the emergency gear extension handle, and what do you do to extend the gear?",
    answer: "Location: Cockpit center pedestal.\n\nProcedure:\n1. Pull out the free-fall handle, then rotate clockwise\n2. This activates the free-fall selector valve, which releases all residual hydraulic pressure in the landing gear lines to the return line\n3. Gravitational and aerodynamic forces extend the landing gear\n4. When extension is complete, the gear is locked in the fully extended position by the downlock mechanism\n\nPulling force: Will not exceed 10 kgf (22 lbf) with a full stroke."
  },
  {
    id: "seed-211",
    category: "Landing Gear",
    question: "When do you see the three green DN indications after an emergency gear extension?",
    answer: "The three green DN indications (in boxes) appear on the display only after the LDG GEAR lever has been moved to the DN position.\n\nThe free-fall procedure alone is not enough to get the indications. You still need to physically place the gear lever in DN."
  },
  {
    id: "seed-212",
    category: "Landing Gear",
    question: "What do you do if one main gear doesn't lock down after emergency extension, and how do you restore normal hydraulic operation?",
    answer: "If one main gear does not lock down:\nSlip the airplane using aerodynamic drag to lock the affected leg.\n\nTo restore normal hydraulic operation:\nStow the emergency extension lever back to its initial position."
  },
  {
    id: "seed-213",
    category: "Landing Gear",
    question: "What does the Landing Gear Position and Warning Subsystem consist of?",
    answer: "Four types of switches:\n\n1. Proximity switches for the \"down and locked\" condition\n2. Proximity switches for the \"up and locked\" condition\n3. Proximity switches for Weight On Wheels (one per MLG)\n4. Micro switches installed in the landing gear control lever\n\nThe system processes signals from these switches to provide gear position indications and CAS messages."
  },
  {
    id: "seed-214",
    category: "Landing Gear",
    question: "How are the landing gear doors related to the gear position sensors?",
    answer: "Each landing gear door is mechanically linked to its respective landing gear.\n\nBecause of that link, the landing gear position sensors indicate that each gear AND its associated door are secured in the extended (or retracted) position.\n\nYou don't need separate door sensors. Door position is implied by the gear position."
  },
  {
    id: "seed-215",
    category: "Landing Gear",
    question: "What do the Weight On Wheels (WOW) sensors do, and what triggers the LG WOW SYS FAIL message?",
    answer: "What they do:\nThe WOW proximity switches are actuated by airplane weight. They tell other airplane systems whether the airplane is on the ground or in-flight.\n\nLG WOW SYS FAIL message:\nTriggered by a disagreement between the signals from the right and left WOW sensors for more than 3 seconds."
  },
  {
    id: "seed-216",
    category: "Landing Gear",
    question: "How does the main brake system work, and what bus powers the BCU?",
    answer: "The main brake is a brake-by-wire system controlled by either pilot or copilot via rudder pedals.\n\nSignal path:\n1. Rudder pedals actuate pedal transducers\n2. Pedal transducers send brake inputs to the Brake Control Unit (BCU)\n3. BCU controls both LH and RH brakes independently via the shutoff valve (SOV) and two brake control valves (BCVs)\n4. Each wheel brake is commanded by a dedicated electro-hydraulic BCV\n\nBCU power: Connected to DC BUS 2.\n\nThe BCU measures wheel speed transducer, pedal transducer, and pressure transducer outputs to send commands to the appropriate BCV."
  },
  {
    id: "seed-217",
    category: "Landing Gear",
    question: "What functions does the brake system include?",
    answer: "Five functions:\n\n1. Locked wheel protection\n2. Antiskid protection\n3. Touchdown protection\n4. Spin brake\n5. Integrated maintenance/Built-In Test (BIT)\n\nIf the main brake fails, the emergency/parking brake is available (must be used carefully to stop the airplane)."
  },
  {
    id: "seed-218",
    category: "Landing Gear",
    question: "How does locked wheel protection work, and what's the dropout speed?",
    answer: "How it works:\nThe system compares wheel speed between LH and RH brakes. If a wheel speed is at or below 30% of the reference velocity, it's detected as locked. The brake control module then releases brake pressure on the slower wheel to zero, allowing speed equalization.\n\nRecovery:\nWheel speed must be greater than 35% of the reference speed before the brake pressure dump is removed.\n\nDropout speed: 30 kt (below this, function drops out, allowing differential braking for steering).\n\nNote: If a wheel is deemed locked for more than the locked wheel protection time (up to 3 seconds), the ANTISKID FAIL CAS message triggers and antiskid is disabled on that wheel."
  },
  {
    id: "seed-219",
    category: "Landing Gear",
    question: "What does antiskid protection do, and at what speed does it deactivate?",
    answer: "Function:\nPrevents tire skidding and maximizes brake efficiency for the runway surface. The system controls hydraulic pressure to the brakes and reduces pressure if needed to recover wheel speed.\n\nDeactivation:\nFor wheel speeds below 10 kt, antiskid is deactivated. This allows the pilot to lock a wheel and pivot on it.\n\nImportant: Antiskid is NOT available for the emergency/parking brake system."
  },
  {
    id: "seed-220",
    category: "Landing Gear",
    question: "What is touchdown protection, and when is it deactivated?",
    answer: "Function:\nPrevents the airplane from touching down with the main brakes applied, which would cause tire blowout at touchdown.\n\nDeactivation (single wheel):\n• Speed is above 35 kt, OR\n• 5 seconds after WOW has sensed the ground\n\nDeactivation (Post-Mod SB 500-32-0008, both wheels):\n• Speed is above 35 kt, OR\n• 3 seconds after WOW has sensed the ground\n\nInhibited during:\n• Spin down braking\n• In-flight test"
  },
  {
    id: "seed-221",
    category: "Landing Gear",
    question: "What is the spin brake function?",
    answer: "Stops the rotation of the main landing gear wheels after takeoff, within 4.5 seconds after gear retraction is initiated.\n\nThis prevents the main gear from being retracted with the wheels still spinning. A dedicated device inside the nose landing gear bay also stops the nose wheel from spinning.\n\nFor airplanes with the spoiler system installed, spin brake is inhibited if the hydraulic system fails (to preserve main brake accumulator output for landing)."
  },
  {
    id: "seed-222",
    category: "Landing Gear",
    question: "What are the three Built-In Test (BIT) functions in the brake system?",
    answer: "1. Start-Up Test (ST): Tests the BCU's internal processing capability. Briefly affects braking. Performed when stationary or at very low wheel speed.\n\n2. Continuous Built-In Test (CBIT): Monitors the Brake Control System LRUs in normal use, in the air or on the ground. Background test, doesn't interfere with braking.\n\n3. In-Flight Test (IFT): Checks critical functions like SOV and BCV operation prior to landing. For airplanes with spoiler system, IFT is inhibited if the hydraulic system fails (to preserve accumulator output for landing)."
  },
  {
    id: "seed-223",
    category: "Oxygen",
    question: "Where is the oxygen cylinder discharge indicator located, and what does it tell you?",
    answer: "Location: Fuselage skin on the left side of the forward baggage compartment door.\n\nFunction: A green disc that blows out in the event of a cylinder overpressure.\n\nIf the green disc is missing during preflight, the cylinder has overpressured and discharged."
  },
  {
    id: "seed-224",
    category: "Oxygen",
    question: "What does the Supply Control Knob do in each of its three positions?",
    answer: "Located on the OXYGEN control panel. Three positions:\n\nPAX AUTO: Passenger masks automatically deploy when cabin pressure reaches 14,700 ft (+300/-300 ft), IF the OXYGEN SUPPLY handle is pushed.\n\nPAX OVRD: Manual passenger mask deployment from the cockpit, IF the OXYGEN SUPPLY handle is pushed.\n\nCREW ONLY: Automatic deployment of passenger oxygen masks is disabled."
  },
  {
    id: "seed-225",
    category: "Oxygen",
    question: "What is the minimum oxygen dispatch pressure, and what does it cover?",
    answer: "Minimum dispatch pressure: 730 psi\n\nWhat it covers:\n• Emergency descent to 10,000 ft with no obstacle clearance\n• 10 minutes of oxygen supply for each occupant\n• Assumes 2 pilots and 6 passengers on board\n\nMask settings during the descent:\n• Cockpit masks in 100% mode during emergency descent\n• Cockpit masks in normal mode at 10,000 ft"
  },
  {
    id: "seed-226",
    category: "Warning Systems",
    question: "What are the four CAS message priority levels and their associated chimes?",
    answer: "WARNING (red): Emergency operational or airplane system conditions requiring immediate corrective or compensatory crew action.\n• Aural: Triple chime\n\nCAUTION (yellow): Abnormal operational or airplane system conditions requiring immediate crew awareness and subsequent corrective or compensatory action.\n• Aural: Single chime\n\nADVISORY (white): Operational or airplane conditions requiring crew awareness. Subsequent or future crew action may be required.\n• No chime\n\nGOLDEN (red/yellow/white): Improves pilot awareness and helps decision-making when multiple CAS messages are triggered. Considered the root cause of other failures."
  },
  {
    id: "seed-227",
    category: "Warning Systems",
    question: "What is a GOLDEN CAS message and how is it identified?",
    answer: "A GOLDEN CAS message is the root cause of other failures when multiple CAS messages are triggered. Its purpose is to improve pilot awareness and help with decision-making.\n\nProcedure priority:\nWhen applicable, the GOLDEN message procedure must be accomplished by the crew first, before working through the other CAS messages.\n\nHow to identify it:\nAfter acknowledgement, the message displays as a steady reverse video.\n\nGOLDEN messages can be red, yellow, or white (they take on the color of the underlying CAS priority)."
  },
  {
    id: "seed-228",
    category: "Warning Systems",
    question: "How does the aural warning system handle multiple alerts at once?",
    answer: "Aural warnings sound in a sequence and are never broken.\n\nPriority rules:\n• The highest priority alerts sound first\n• For multiple alerts of the same priority, the warnings sound alternately, and the first alert triggered is the first to sound\n\nCancellation:\n• Automatically canceled when the alerting situation no longer exists\n• Can also be reset manually by the pilot\n\nThe electronic display system has two aural warning drivers that generate and prioritize the warnings."
  },
  {
    id: "seed-229",
    category: "Warning Systems",
    question: "What types of sounds count as aural warnings, and what's the difference between continuous and non-continuous alerts?",
    answer: "Types of aural warnings:\n• Alert tones\n• Bells\n• Horns\n• Clicks\n• Beeps\n• Voice messages\n\nContinuous vs non-continuous:\n• Continuous alerts can be either cancelable or non-cancelable by the flight crew\n• All continuous alerts are automatically canceled when the alerting condition no longer exists\n\nAural warnings are used when pilots need immediate knowledge of a condition without having to look at a visual display."
  },
  {
    id: "seed-230",
    category: "Warning Systems",
    question: "When does the Takeoff Configuration Warning activate, and what conditions trigger it?",
    answer: "When it activates:\nThe aural warning sounds whenever the airplane is on the ground AND thrust is applied AND at least one of the trigger conditions is met. The CAS message \"NO TO CONFIG\" is also displayed.\n\nTrigger conditions and their messages:\n\n• Flaps not in takeoff position → \"NO TAKEOFF FLAPS\"\n• Parking brakes applied → \"NO TAKEOFF BRAKES\"\n• Pitch trim out of green range → \"NO TAKEOFF TRIM\"\n• (If spoiler-equipped) Spoiler not in takeoff position → \"NO TAKEOFF SPOILER\""
  },
  {
    id: "seed-231",
    category: "Warning Systems",
    question: "What are the two main functions of the SWPS (Stall Warning and Protection System)?",
    answer: "1. Alert the crew for an imminent stall\n2. Prevent the airplane from entering a potentially dangerous stall condition"
  },
  {
    id: "seed-232",
    category: "Warning Systems",
    question: "What is the SWPS composed of?",
    answer: "Four main components:\n\n1. One computer box with two independent channels\n2. SWPS panel\n3. Two Angle of Attack (AOA) sensors\n4. One stick pusher actuator\n\nTo avoid spurious actuation, the SWPS receives signals from many airplane systems and adjusts its set point based on:\n• Flap position\n• Landing gear position\n• Icing conditions\n• Mach number\n\nEach SWPC channel reads its associated AOA sensor and shares the data with the opposite channel to compensate for side slip influence on AOA measurements."
  },
  {
    id: "seed-233",
    category: "Warning Systems",
    question: "What happens when an imminent stall is detected, and what happens when corrective action isn't taken?",
    answer: "When stall is imminent (Stall Warning):\n\n• An aural warning alerts the crew the airplane is approaching stall\n• An airspeed tape visual indication on both PFDs provides low speed awareness\n\nIf no corrective action is taken (Stall Protection):\n\n• The stick pusher actuates, pitching the nose down\n• When the airplane reaches 0.5 g or below, the stick pusher is inhibited and stops actuating on the control column\n\nStall Warning and Stall Protection are activated when angle of attack exceeds the Stall Warning and Stall Protection activation angles, respectively."
  },
  {
    id: "seed-234",
    category: "Warning Systems",
    question: "How can you disconnect the SWPS / stick pusher?",
    answer: "Two ways:\n\n1. Quick disconnect button on the control wheel — lets pilots cut the system if needed during operation\n2. Cutout button on the SWPS panel — disconnects both channels (used for system failures)\n\nCAS messages are displayed to indicate the system has failed or is cutout."
  },
];
