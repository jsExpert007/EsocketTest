import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';
import {Images} from '../../../constants';
import styles from './styles';

interface TSelectListModal {
  title: string;
  value: string;
  options: TOption[];
  isVisibleModal: boolean;
  onCloseModal: () => void;
  onSelect: (item: TOption) => void;
};

interface TOption {
  name: string;
  value: string;
};

export default function SelectListModal({
  title,
  value,
  options,
  isVisibleModal,
  onCloseModal,
  onSelect,
}: TSelectListModal) {
  return (
    <React.Fragment>
      <Modal
        isVisible={isVisibleModal}
        animationInTiming={10}
        animationOutTiming={10}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropTransitionInTiming={10}
        backdropTransitionOutTiming={10}>
        <View style={styles.container}>
          <TouchableOpacity onPress={onCloseModal} style={styles.closeIcon}>
            <Image source={Images.close_icon} />
          </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
          </View>

          {options.map((item, index) => (
            <TouchableOpacity
              style={styles.listItem}
              key={index}
              onPress={() => onSelect(item)}>
              <Text style={styles.description}>{item.name}</Text>
              {value === item.value && <Image source={Images.check_icon} />}
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </React.Fragment>
  );
}
