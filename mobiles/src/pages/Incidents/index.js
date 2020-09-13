import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>0 cases</Text>
        </Text>
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.description}>
        Save the day by choosing one of the following cases:
      </Text>

      <FlatList
        style={styles.ncidentList}
        data={[1, 2, 3]}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>NGO:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASE:</Text>
            <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

            <Text style={styles.incidentProperty}>VALUE:</Text>
            <Text style={styles.incidentValue}>120,00 €</Text>

            <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
              <Text style={styles.detailsButtonText}>See more details</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
