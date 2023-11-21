import React from 'react';
import { View, Text, Image } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 16 }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <View
          style={{
            width: 96,
            height: 96,
            backgroundColor: '#EDEFF2',
            borderTopLeftRadius: 34,
            borderTopRightRadius: 34,
            borderBottomRightRadius: 34,
            overflow: 'hidden',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Use local image */}
          <Image
            style={{ width: 96, height: 96 }}
            source={require('./assets/images/your-image.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 16, // Добавлен отступ сверху для блока с именем и кнопками
          }}
        >
          {/* Ruslan Guliyev */}
          <Text
            style={{
              textAlign: 'center',
              color: '#2D2727',
              fontSize: 16,
              fontFamily: 'SF Pro Display',
              fontWeight: '400',
              lineHeight: 20,
            }}
          >
            Ruslan Guliyev
          </Text>

          {/* @ruslan */}
          <Text
            style={{
              textAlign: 'center',
              color: '#A459D1',
              fontSize: 12,
              fontFamily: 'SF Pro Display',
              fontWeight: '400',
              lineHeight: 16,
            }}
          >
            @ruslan
          </Text>

          {/* Edit and Preview profile buttons */}
          <View
            style={{
              width: 345,
              height: 36,
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexDirection: 'row',
              gap: 8,
              marginTop: 16, // Добавлен отступ сверху для блока с кнопками
            }}
          >
            <View
              style={{
                flex: 1,
                height: 36,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: '#EDEFF2',
                borderRadius: 14,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 4,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#A459D1',
                  fontSize: 16,
                  fontFamily: 'SF Pro Display',
                  fontWeight: '600',
                  lineHeight: 20,
                }}
              >
                Edit profile
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                height: 36,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: '#EDEFF2',
                borderRadius: 14,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 4,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#A459D1',
                  fontSize: 16,
                  fontFamily: 'SF Pro Display',
                  fontWeight: '600',
                  lineHeight: 20,
                }}
              >
                Preview profile
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
