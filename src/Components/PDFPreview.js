// PDFPreview.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
});

const PDFPreview = ({ user, incident, suspect }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Personal details:</Text>
          <Text>First Name: {user.firstname}</Text>
          <Text>Last Name: {user.lastname}</Text>
          <Text>Address: {user.address}</Text>
          <Text>Contact No: {user.contact}</Text>
          <Text>Email: {user.email}</Text>
        </View>
        <View style={styles.section}>
          <Text>Incident details:</Text>
          <Text>Complaint Id: {incident._id}</Text>
          <Text>Category: {incident.category}</Text>
          <Text>Date of Comp: {incident.dateofcmp}</Text>
          <Text>State: {incident.state}</Text>
          <Text>City: {incident.city}</Text>
          {/* Add more incident details here */}
        </View>
        <View style={styles.section}>
          <Text>Suspect details:</Text>
          {suspect.map((e, index) => (
            <View key={index}>
              <Text>Suspect {index + 1}</Text>
              <Text>Susname: {e.susname}</Text>
              <Text>Sussocial: {e.sussocial}</Text>
              <Text>Sususername: {e.sususername}</Text>
              {/* Add more suspect details here */}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFPreview;
