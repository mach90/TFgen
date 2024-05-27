import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
// https://react-pdf.org/styling

const styles = StyleSheet.create({
  page: {
    flexDirection: 'col',
    backgroundColor: '#E4E4E4',
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
  sectionTitle: { 
    color: 'black', 
    backgroundColor: 'grey',
    padding: 2,
  },
  sectionLabel: { 
    color: 'black', 
    padding: 2,
    width: '20%',
  },
  sectionOutput: { 
    color: 'black', 
    backgroundColor: 'lightgrey',
    padding: 2,
    width: '80%',
    textAlign: 'justify',
  },
  sectionGroup: {
    flexDirection: 'row',
  },
  foot: {
    textAlign: 'center',
  }
});

// Create Document Component
export default function MyDocument ({state}) {
  const {fullName, sexe, dob, nationality, height, weight, hair, distinctive, travelOutfit, bloodtype, importantMedication, currentMedication, medicalDevices, allergies, psyCondition, otherMedicalInfos, driverLicence, vehicleTypeColor, vehicleReg, vehicleRentalAgency, telephone, communicationDevices, checkInReport, signalCoverage, staying, contacts, autostop, drinkingHabit, smokingHabit, drugUseHabit, personalityTrait, trustLevel, hobbies,languages, fitnessCondition, swimming, outdoorSkill, hikingExperience, survivalSkills, militaryExperience, medicSkills, paperMoney, groupMembers, intentions, equipment, survivalEquipment, tripPlan, confidence, fightingSkills, joinedDocuments, thisIsOurDate} = state;

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Text style={styles.foot} render={({pageNumber, totalPages}) => `EMERGENCY PLAN OF ACTION --- ${fullName} --- ${thisIsOurDate} --- Page ${pageNumber}/${totalPages}`} fixed />

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>IDENTITY</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Full name: </Text><Text style={styles.sectionOutput}>{fullName}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Sexe: </Text><Text style={styles.sectionOutput}>{sexe}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>DOB (Y/M/D): </Text><Text style={styles.sectionOutput}>{dob}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Nationality: </Text><Text style={styles.sectionOutput}>{nationality}</Text></View>
          {/* <Image src="https://react-pdf.org/images/logo.png"></Image> */}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>APPEARANCE</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Height: </Text><Text style={styles.sectionOutput}>{height} cm</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Weight: </Text><Text style={styles.sectionOutput}>{weight} kg</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Hair: </Text><Text style={styles.sectionOutput}>{hair}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Distinctive: </Text><Text style={styles.sectionOutput}>{distinctive}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Travel outfit: </Text><Text style={styles.sectionOutput}>{travelOutfit}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>MEDICAL INFOS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Bloodtype: </Text><Text style={styles.sectionOutput}>{bloodtype}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Important medication: </Text><Text style={styles.sectionOutput}>{importantMedication}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Current medication: </Text><Text style={styles.sectionOutput}>{currentMedication}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Medical devices: </Text><Text style={styles.sectionOutput}>{medicalDevices}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Allergies: </Text><Text style={styles.sectionOutput}>{allergies}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Psy condition: </Text><Text style={styles.sectionOutput}>{psyCondition}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Other medical informations: </Text><Text style={styles.sectionOutput}>{otherMedicalInfos}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>DRIVER INFOS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Driver licence: </Text><Text style={styles.sectionOutput}>{driverLicence}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Vehicle(s) description: </Text><Text style={styles.sectionOutput}>{vehicleTypeColor}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Vehicle(s) registration: </Text><Text style={styles.sectionOutput}>{vehicleReg}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Rental informations (agencies and dates): </Text><Text style={styles.sectionOutput}>{vehicleRentalAgency}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>COMMUNICATION</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Telephone number: </Text><Text style={styles.sectionOutput}>{telephone}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>Communication devices: </Text><Text style={styles.sectionOutput}>{communicationDevices}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>checkInReport: </Text><Text style={styles.sectionOutput}>{checkInReport}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>signalCoverage: </Text><Text style={styles.sectionOutput}>{signalCoverage}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>STAYING</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>staying: </Text><Text style={styles.sectionOutput}>{staying}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>RELATIVES/EMERGENCY CONTACTS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>contacts: </Text><Text style={styles.sectionOutput}>{contacts}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>PERSONALITY AND BEHAVIOR</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>autostop: </Text><Text style={styles.sectionOutput}>{autostop}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>drinkingHabit: </Text><Text style={styles.sectionOutput}>{drinkingHabit}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>smokingHabit: </Text><Text style={styles.sectionOutput}>{smokingHabit}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>drugUseHabit: </Text><Text style={styles.sectionOutput}>{drugUseHabit}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>personalityTrait: </Text><Text style={styles.sectionOutput}>{personalityTrait}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>trustLevel: </Text><Text style={styles.sectionOutput}>{trustLevel}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>confidence: </Text><Text style={styles.sectionOutput}>{confidence}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>hobbies: </Text><Text style={styles.sectionOutput}>{hobbies}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>languages: </Text><Text style={styles.sectionOutput}>{languages}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>fitnessCondition: </Text><Text style={styles.sectionOutput}>{fitnessCondition}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>swimming: </Text><Text style={styles.sectionOutput}>{swimming}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>outdoorSkill: </Text><Text style={styles.sectionOutput}>{outdoorSkill}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>hikingExperience: </Text><Text style={styles.sectionOutput}>{hikingExperience}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>survivalSkills: </Text><Text style={styles.sectionOutput}>{survivalSkills}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>militaryExperience: </Text><Text style={styles.sectionOutput}>{militaryExperience}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>fightingSkills: </Text><Text style={styles.sectionOutput}>{fightingSkills}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>medicSkills: </Text><Text style={styles.sectionOutput}>{medicSkills}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>TRIP PLANNING</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>paperMoney: </Text><Text style={styles.sectionOutput}>{paperMoney}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>tripPlan: </Text><Text style={styles.sectionOutput}>{tripPlan}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>GROUP MEMBERS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>groupMembers: </Text><Text style={styles.sectionOutput}>{groupMembers}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>FORESEABLE PROBLEMS & INTENTIONS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>intentions: </Text><Text style={styles.sectionOutput}>{intentions}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>EQUIPMENT</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>equipment: </Text><Text style={styles.sectionOutput}>{equipment}</Text></View>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>survivalEquipment: </Text><Text style={styles.sectionOutput}>{survivalEquipment}</Text></View>
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>JOINED DOCUMENTS</Text>
          <View style={styles.sectionGroup}><Text style={styles.sectionLabel}>joinedDocuments: </Text><Text style={styles.sectionOutput}>{joinedDocuments}</Text></View>
        </View>

      </Page>
    </Document>
  )
}