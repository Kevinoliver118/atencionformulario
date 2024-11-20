// src/data/datosEquipos.js
export default {
    tipos: [
      { value: 'computadora', label: 'Computadora' },
      { value: 'impresora', label: 'Impresora' },
      { value: 'router', label: 'Router' },
      { value: 'otro', label: 'Otro' }
    ],
    marcasYModelos: {
      computadora: [
        { marca: 'HP', modelos: ['HP Pavilion', 'HP Elitebook', 'HP Spectre', 'HP Omen', 'HP Envy'] },
        { marca: 'Dell', modelos: ['Dell XPS', 'Dell Inspiron', 'Dell Latitude', 'Dell Alienware', 'Dell Vostro'] },
        { marca: 'Lenovo', modelos: ['Lenovo ThinkPad', 'Lenovo Yoga', 'Lenovo Legion', 'Lenovo IdeaPad', 'Lenovo ThinkCentre'] },
        { marca: 'Asus', modelos: ['Asus ZenBook', 'Asus VivoBook', 'Asus TUF', 'Asus ROG', 'Asus Chromebook'] },
        { marca: 'Acer', modelos: ['Acer Aspire', 'Acer Predator', 'Acer Nitro', 'Acer Swift', 'Acer Chromebook'] },
        { marca: 'Apple', modelos: ['MacBook Pro', 'MacBook Air', 'iMac', 'Mac Mini'] },
        { marca: 'Microsoft', modelos: ['Surface Laptop', 'Surface Pro', 'Surface Book', 'Surface Go'] },
        { marca: 'Razer', modelos: ['Razer Blade', 'Razer Book', 'Razer Stealth'] },
        { marca: 'MSI', modelos: ['MSI GS Series', 'MSI GE Series', 'MSI Creator Series', 'MSI Stealth'] }
      ],
      impresora: [
        { marca: 'Canon', modelos: ['Canon PIXMA', 'Canon Maxify', 'Canon imagePROGRAF', 'Canon Selphy'] },
        { marca: 'HP', modelos: ['HP DeskJet', 'HP LaserJet', 'HP OfficeJet', 'HP ENVY', 'HP PageWide'] },
        { marca: 'Epson', modelos: ['Epson EcoTank', 'Epson WorkForce', 'Epson Expression', 'Epson SureColor'] },
        { marca: 'Brother', modelos: ['Brother HL Series', 'Brother MFC Series', 'Brother DCP Series'] },
        { marca: 'Samsung', modelos: ['Samsung Xpress', 'Samsung ProXpress'] },
        { marca: 'Lexmark', modelos: ['Lexmark CS Series', 'Lexmark MB Series', 'Lexmark MS Series'] },
        { marca: 'Ricoh', modelos: ['Ricoh SP Series', 'Ricoh MP Series', 'Ricoh Pro Series'] }
      ],
      router: [
        { marca: 'TP-Link', modelos: ['TP-Link Archer', 'TP-Link Deco', 'TP-Link TL-WR', 'TP-Link Tether'] },
        { marca: 'Netgear', modelos: ['Netgear Nighthawk', 'Netgear Orbi', 'Netgear Genie', 'Netgear Arlo'] },
        { marca: 'Asus', modelos: ['Asus RT', 'Asus ZenWiFi', 'Asus ROG', 'Asus Lyra'] },
        { marca: 'Linksys', modelos: ['Linksys Velop', 'Linksys WRT Series', 'Linksys Max-Stream'] },
        { marca: 'D-Link', modelos: ['D-Link DIR Series', 'D-Link AC Series', 'D-Link Covr'] },
        { marca: 'Ubiquiti', modelos: ['Ubiquiti UniFi', 'Ubiquiti AmpliFi'] },
        { marca: 'Google', modelos: ['Google Nest Wifi', 'Google Wifi'] },
        { marca: 'Xiaomi', modelos: ['Xiaomi Mi Wi-Fi', 'Xiaomi Mi Mesh'] }
      ],
      otro: [
        { marca: 'Logitech', modelos: ['Logitech MX Master', 'Logitech G Pro', 'Logitech C920'] },
        { marca: 'Samsung', modelos: ['Samsung Galaxy SmartThings', 'Samsung SmartCam', 'Samsung Gear VR'] },
        { marca: 'Sony', modelos: ['Sony PlayStation', 'Sony Xperia', 'Sony Bravia'] },
        { marca: 'Garmin', modelos: ['Garmin Forerunner', 'Garmin Fenix', 'Garmin Vivoactive'] },
        { marca: 'GoPro', modelos: ['GoPro Hero', 'GoPro Max'] },
        { marca: 'Philips', modelos: ['Philips Sonicare', 'Philips Hue', 'Philips Ambilight'] },
        { marca: 'Nest', modelos: ['Nest Thermostat', 'Nest Cam', 'Nest Protect'] },
        { marca: 'Fitbit', modelos: ['Fitbit Charge', 'Fitbit Versa', 'Fitbit Inspire'] },
        { marca: 'Amazon', modelos: ['Amazon Echo', 'Amazon Kindle', 'Amazon Fire TV'] },
        { marca: 'Bose', modelos: ['Bose QuietComfort', 'Bose SoundLink', 'Bose SoundSport'] },
      ]
    }
  };
  