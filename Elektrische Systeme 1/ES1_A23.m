%--------------------------------------------------------------
% Elektrische Systeme 1 
% Musterl�sung - Aufgabe 23
% Prof. Dr.-Ing. V. Sommer, Beuth Hochschule f�r Technik Berlin
%--------------------------------------------------------------

clear
close all
home

f = 2000;                  % Frequenz in Hz
om = 2*pi*f;               % Kreisfrequenz in 1/s
C = 2.5e-6;                % Kapazit�t in F
phi = 10*pi/180;           % Winkel in rad
U = 12;                    % Spannung in V

R = 1/(om*C*tan(phi))      % Widerstand R in Ohm
Z = R+1/(j*om*C)           % Komplexer Scheinwiderstand mit
Z_Betrag = abs(Z)          % Betrag des Widerstandes
Z_Winkel = angle(Z)*180/pi % Phase in deg
I = U/Z                    % Strom in A
I_Betrag = abs(I)          % Betrag des Stromes
I_Winkel=angle(I)*180/pi   % Phase des Stromes

compass([R 1/(j*om*C) Z])  % Darstellung im Zeigerdiagramm