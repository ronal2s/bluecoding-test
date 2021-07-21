import React, { useState } from "react";
import { View } from "react-native";
import FlatButton from "../../../components/flatButton/flatButton";
import CustomTextInput from "../../../components/input/input";
import Spacer from "../../../components/spacer";
import defaultValues from "../../../utils/defaultValues";

function GiftSearchContent({
  onSearch,
  loading,
}: {
  onSearch: (value: string) => void;
  loading: boolean;
}) {
  const [form, setForm] = useState({ search: "" });
  const onChangeInput = (value: string, name: string) => {
    //@ts-ignore
    setForm({ [name]: value });
  };

  const onSearchPressed = () => {
    onSearch(form.search);
  };

  return (
    <View style={{ padding: defaultValues.padding }}>
      <CustomTextInput
        label="Search for a gif"
        value={form.search}
        name="search"
        onChange={onChangeInput}
      />
      <Spacer height={defaultValues.space} />
      <FlatButton loading={loading} onPress={onSearchPressed}>
        Search
      </FlatButton>
    </View>
  );
}

export default GiftSearchContent;
