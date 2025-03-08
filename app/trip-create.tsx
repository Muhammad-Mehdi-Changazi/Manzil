import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import tripFormStyles from "./styles/tripFormStyles";

export default function TripCreateScreen() {
  const { control, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    router.push({
      pathname: "/trip-itinerary",
      params: {
        from: data.from,
        to: data.to,
        startDate: data.startDate,
        endDate: data.endDate,
        transport: data.transport,
      },
    });
  };

  return (
    <ScrollView style={tripFormStyles.container}>
      <Text style={tripFormStyles.title}>Create a Trip</Text>

      {/* From */}
      <Text>From:</Text>
      <Controller
        control={control}
        name="from"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput style={tripFormStyles.input} placeholder="Enter starting location" onChangeText={onChange} value={value} />
        )}
      />

      {/* To */}
      <Text>To:</Text>
      <Controller
        control={control}
        name="to"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput style={tripFormStyles.input} placeholder="Enter destination" onChangeText={onChange} value={value} />
        )}
      />

      {/* Start Date */}
      <Text>Start Date:</Text>
      <Controller
        control={control}
        name="startDate"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput style={tripFormStyles.input} placeholder="YYYY-MM-DD" onChangeText={onChange} value={value} />
        )}
      />

      {/* End Date */}
      <Text>End Date:</Text>
      <Controller
        control={control}
        name="endDate"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput style={tripFormStyles.input} placeholder="YYYY-MM-DD" onChangeText={onChange} value={value} />
        )}
      />

      {/* Transport Mode */}
      <Text>Mode of Transport:</Text>
      <Controller
        control={control}
        name="transport"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput style={tripFormStyles.input} placeholder="Car, Bus, Train etc." onChangeText={onChange} value={value} />
        )}
      />

      {/* Submit Button */}
      <Button title="Generate Itinerary" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}
