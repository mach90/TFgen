/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { type State } from "../../pages/Form";

/* //////////////////////////////////////////////////
STYLES https://react-pdf.org/styling
////////////////////////////////////////////////// */
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    fontSize: 8,
    padding: 10,
  },
  section: {
    margin: 5,
    padding: 2,
    flexGrow: 1,
    border: "1px dashed black",
    borderRadius: "1px",
    gap: 2,
  },
  sectionImage: {
    margin: 5,
    padding: 2,
    flexGrow: 1,
    border: "1px dashed black",
    borderRadius: "1px",
    gap: 2,
  },
  sectionTitle: { 
    color: "black", 
    backgroundColor: "grey",
    padding: 2,
  },
  sectionLabel: { 
    color: "black", 
    padding: 2,
    width: "20%",
  },
  sectionOutput: { 
    color: "black", 
    backgroundColor: "lightgrey",
    padding: 2,
    width: "80%",
    textAlign: "justify",
  },
  sectionGroup: {
    flexDirection: "row",
  },
  sectionSup: {
    flexDirection: "row",
  },
  foot: {
    textAlign: "center",
  },
  reminder: {
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    padding: 2,
    marginTop: 2,
  }
});

/* //////////////////////////////////////////////////
PDF DOCUMENT COMPONENT
This is the PDF Form that will be created
////////////////////////////////////////////////// */
export default function SectionDocument ({ state }: { state: State }) {
  /* //////////////////////////////////////////////////
  STATE VARIABLES
  ////////////////////////////////////////////////// */
  const {...stateVariables} = state;

  /* //////////////////////////////////////////////////
  JSX
  ////////////////////////////////////////////////// */
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Text style={styles.foot} render={({pageNumber, totalPages}) => `TRAVEL FORM --- ${stateVariables.fullName} --- ${stateVariables.thisIsOurDate} --- Page ${pageNumber}/${totalPages}`} fixed />
        <Text style={styles.reminder} fixed>{`I SHOULD BE BACK AND CONFIRM SAFETY BY ${stateVariables.eta}`}</Text>

        <View style={styles.section} wrap={false}>

            <Text style={styles.sectionTitle}>IDENTITY</Text>
            <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Full name: </Text><Text style={styles.sectionOutput}>{stateVariables.fullName}</Text></View>
            <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Biological sexe: </Text><Text style={styles.sectionOutput}>{stateVariables.sexe}</Text></View>
            <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>DOB (Y/M/D): </Text><Text style={styles.sectionOutput}>{stateVariables.dob}</Text></View>
            <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Nationality: </Text><Text style={styles.sectionOutput}>{stateVariables.nationality}</Text></View>
            <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Ethnicity: </Text><Text style={styles.sectionOutput}>{stateVariables.ethnicity}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>LEAVE AND RETURN DATES</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Leaving date (Y/M/D/H): </Text><Text style={styles.sectionOutput}>{stateVariables.etd}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Return date (Y/M/D/H): </Text><Text style={styles.sectionOutput}>{stateVariables.eta}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>APPEARANCE</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Height (cm): </Text><Text style={styles.sectionOutput}>{stateVariables.height}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Weight (kg): </Text><Text style={styles.sectionOutput}>{stateVariables.weight}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Hair: </Text><Text style={styles.sectionOutput}>{stateVariables.hair}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Distinctive signs: </Text><Text style={styles.sectionOutput}>{stateVariables.distinctive}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Travel outfit: </Text><Text style={styles.sectionOutput}>{stateVariables.travelOutfit}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>MEDICAL</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Bloodtype: </Text><Text style={styles.sectionOutput}>{stateVariables.bloodtype}</Text></View>
          {/* <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Important medication: </Text><Text style={styles.sectionOutput}>{stateVariables.importantMedication}</Text></View> */}
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Current medication: </Text><Text style={styles.sectionOutput}>{stateVariables.currentMedication}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Medical devices: </Text><Text style={styles.sectionOutput}>{stateVariables.medicalDevices}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Allergies: </Text><Text style={styles.sectionOutput}>{stateVariables.allergies}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Psychological state: </Text><Text style={styles.sectionOutput}>{stateVariables.psyCondition}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Other: </Text><Text style={styles.sectionOutput}>{stateVariables.otherMedicalInfos}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>VEHICLES</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Driver licence: </Text><Text style={styles.sectionOutput}>{stateVariables.driverLicence}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Vehicle(s) description: </Text><Text style={styles.sectionOutput}>{stateVariables.vehicleTypeColor}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Vehicle(s) registration: </Text><Text style={styles.sectionOutput}>{stateVariables.vehicleReg}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Rental informations: </Text><Text style={styles.sectionOutput}>{stateVariables.vehicleRentalAgency}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>COMMUNICATION</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Telephone number: </Text><Text style={styles.sectionOutput}>{stateVariables.telephone}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Communication devices: </Text><Text style={styles.sectionOutput}>{stateVariables.communicationDevices}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Check in reports: </Text><Text style={styles.sectionOutput}>{stateVariables.checkInReport}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Signal coverage expected: </Text><Text style={styles.sectionOutput}>{stateVariables.signalCoverage}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>STAYING</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Staying places: </Text><Text style={styles.sectionOutput}>{stateVariables.staying}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>RELATIVES/EMERGENCY CONTACTS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Who to contact: </Text><Text style={styles.sectionOutput}>{stateVariables.contacts}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>PERSONALITY AND BEHAVIOR</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Autostop: </Text><Text style={styles.sectionOutput}>{stateVariables.autostop}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Drinking habit: </Text><Text style={styles.sectionOutput}>{stateVariables.drinkingHabit}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Smoking habit: </Text><Text style={styles.sectionOutput}>{stateVariables.smokingHabit}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Drug use habit: </Text><Text style={styles.sectionOutput}>{stateVariables.drugUseHabit}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Personality trait: </Text><Text style={styles.sectionOutput}>{stateVariables.personalityTrait}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Trust level: </Text><Text style={styles.sectionOutput}>{stateVariables.trustLevel}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Cautiousness: </Text><Text style={styles.sectionOutput}>{stateVariables.confidence}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Hobbies: </Text><Text style={styles.sectionOutput}>{stateVariables.hobbies}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Language(s) spoken: </Text><Text style={styles.sectionOutput}>{stateVariables.languages}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Fitness condition: </Text><Text style={styles.sectionOutput}>{stateVariables.fitnessCondition}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Swimming: </Text><Text style={styles.sectionOutput}>{stateVariables.swimming}</Text></View>
          {/* <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>outdoorSkill: </Text><Text style={styles.sectionOutput}>{stateVariables.outdoorSkill}</Text></View> */}
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Hiking experience: </Text><Text style={styles.sectionOutput}>{stateVariables.hikingExperience}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Survival skills: </Text><Text style={styles.sectionOutput}>{stateVariables.survivalSkills}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Military experience: </Text><Text style={styles.sectionOutput}>{stateVariables.militaryExperience}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Fighting ability: </Text><Text style={styles.sectionOutput}>{stateVariables.fightingSkills}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Medic skills: </Text><Text style={styles.sectionOutput}>{stateVariables.medicSkills}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>GROUP MEMBERS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Group members: </Text><Text style={styles.sectionOutput}>{stateVariables.groupMembers}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>TRIP PLANNING</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Paper money (days): </Text><Text style={styles.sectionOutput}>{stateVariables.paperMoney}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Day to day plan: </Text><Text style={styles.sectionOutput}>{stateVariables.tripPlan}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>FORESEABLE PROBLEMS & INTENTIONS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Planned decisions and actions for potential issues: </Text><Text style={styles.sectionOutput}>{stateVariables.intentions}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>EQUIPMENT</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Water/Food supply: </Text><Text style={styles.sectionOutput}>{stateVariables.waterFoodSupply}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Survival equipment: </Text><Text style={styles.sectionOutput}>{stateVariables.survivalEquipment}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>ATTACHMENTS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Attachments: </Text><Text style={styles.sectionOutput}>{stateVariables.attachments}</Text></View>
        </View>

      </Page>
    </Document>
  )
}