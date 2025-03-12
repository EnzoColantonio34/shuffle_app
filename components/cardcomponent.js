import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import styles from '../styles/cardstyle';

const CardComponent = () => (
  <Card style={styles.card}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" titleStyle={styles.cardTitle} />
    <Card.Content>
      <Text style={styles.cardContent}>Card content</Text>
    </Card.Content>
  </Card>
);

export default CardComponent;