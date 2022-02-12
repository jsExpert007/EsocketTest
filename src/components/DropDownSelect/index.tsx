import React, {useState} from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {SelectListModal} from '../';
import {Images} from '../../../constants';
import styles from './styles';

interface TDropDownSelect {
  options: TOption[];
  value: string;
  onSelect: (value: string) => void;
};

interface TOption {
  name: string;
  value: string;
};

export default function DropDownSelect({
  options = [],
  value,
  onSelect,
}: TDropDownSelect) {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const toggleModal = () => setIsVisibleModal(!isVisibleModal);
  const onCloseModal = () => setIsVisibleModal(false);

  const onSelectItem = (e: any) => {
    setTimeout(() => {
      onCloseModal();
    }, 300);
    onSelect(e.value);
  };

  const getChanelName = (value: string) => {
    return options.find(i => i.value === value)?.name || options[0].name;
  };

  return (
    <React.Fragment>
      <TouchableOpacity style={styles.container} onPress={toggleModal}>
        <Text style={styles.label}>{getChanelName(value)}</Text>
        <Image source={Images.arrow_down_icon} />
      </TouchableOpacity>
      <SelectListModal
        title={'Select Chanel'}
        value={value}
        options={options}
        isVisibleModal={isVisibleModal}
        onCloseModal={onCloseModal}
        onSelect={onSelectItem}
      />
    </React.Fragment>
  );
};
