import { View, Text, Pressable } from "react-native";
import React from "react";
import { useColors } from "@/hooks/useColor";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function WorkspaceNavbar() {
  const colors = useColors();
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: colors.foreground,
          fontWeight: 500,
        }}
      >
        My Habits
      </Text>
      <Link href={"/workspace/settings"} asChild>
        <Pressable>
          <Feather name="settings" color={colors.foreground} size={24} />
        </Pressable>
      </Link>
    </View>
  );
}
