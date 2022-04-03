#include <RH_ASK.h>
#include <SPI.h> 
 
// Arduino                     Transmitter
//  GND--------------------------GND
//  D12--------------------------Data
//  5V---------------------------VCC
 #define pin_SENSOR 32
RH_ASK driver(2000, 11, 12);
 
void setup() {
  Serial.begin(9600);   
  if (!driver.init()) Serial.println("init failed");
  pinMode(pin_SENSOR, INPUT);
}
 
void loop() {
  if(digitalRead(pin_SENSOR)){
  const char *msg = "hello";
  driver.send((uint8_t *)msg, strlen(msg));
  driver.waitPacketSent();
  delay(200);
  }
}
