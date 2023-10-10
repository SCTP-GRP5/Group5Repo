
import styles from "./ForexTable.module.css";

function Table ({ data, fxmetadata }) {
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>   
                    <th>From Symbol</th>
                    <th>To Symbol</th>
                    <th>Last Refreshed</th>
                    <th>Date</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                </tr>
            </thead>
            <tbody>
              {/* Jian modified this line of code to add another map function and slice function */}
            {Object.entries(data).map(([date,values])=> ({date, ...values})).slice(0,15).map((item, index) => (
            <tr key={index}>
              <td>{fxmetadata["2. From Symbol"]}</td>
              <td>{fxmetadata["3. To Symbol"]}</td>
              <td>{fxmetadata["5. Last Refreshed"]}</td>
              <td>{item["date"]}</td>
              <td>{item["1. open"]}</td>
              <td>{item["2. high"]}</td>
              <td>{item["3. low"]}</td>
              <td>{item["4. close"]}</td>
            </tr>
             ))}
            </tbody>
            </table>
        </div>
    );
} 

export default Table;


// Added in Notes
/*
FX_DAILY Data Structure :

{
  "Meta Data": {
    "1. Information": "Forex Daily Prices (open, high, low, close)",
    "2. From Symbol": "EUR",
    "3. To Symbol": "USD",
    "4. Output Size": "Compact",
    "5. Last Refreshed": "2019-12-03 18:10:00",
    "6. Time Zone": "UTC"
  },
  "Time Series FX (Daily)": {
    "2019-12-03": {
      "1. open": "1.1076",
      "2. high": "1.1094",
      "3. low": "1.1065",
      "4. close": "1.1090"
    },
    "2019-12-02": {
      "1. open": "1.1021",
      "2. high": "1.1091",
      "3. low": "1.1001",
      "4. close": "1.1076"
    },
    "2019-12-01": {
      "1. open": "1.1014",
      "2. high": "1.1027",
      "3. low": "1.1013",
      "4. close": "1.1021"
    },
    "2019-11-29": {
      "1. open": "1.1011",
      "2. high": "1.1028",
      "3. low": "1.0980",
      "4. close": "1.1017"
    },
    "2019-11-28": {
      "1. open": "1.1005",
      "2. high": "1.1018",
      "3. low": "1.0999",
      "4. close": "1.1009"
    },
    "2019-11-27": {
      "1. open": "1.1023",
      "2. high": "1.1023",
      "3. low": "1.0990",
      "4. close": "1.1005"
    },
    "2019-11-26": {
      "1. open": "1.1014",
      "2. high": "1.1026",
      "3. low": "1.1006",
      "4. close": "1.1023"
    },
    "2019-11-25": {
      "1. open": "1.1022",
      "2. high": "1.1032",
      "3. low": "1.1002",
      "4. close": "1.1014"
    },
    "2019-11-24": {
      "1. open": "1.1024",
      "2. high": "1.1025",
      "3. low": "1.1012",
      "4. close": "1.1022"
    },
    "2019-11-22": {
      "1. open": "1.1062",
      "2. high": "1.1088",
      "3. low": "1.1013",
      "4. close": "1.1022"
    },
    "2019-11-21": {
      "1. open": "1.1076",
      "2. high": "1.1097",
      "3. low": "1.1051",
      "4. close": "1.1061"
    },
    "2019-11-20": {
      "1. open": "1.1078",
      "2. high": "1.1081",
      "3. low": "1.1051",
      "4. close": "1.1076"
    },
    "2019-11-19": {
      "1. open": "1.1071",
      "2. high": "1.1084",
      "3. low": "1.1061",
      "4. close": "1.1077"
    },
    "2019-11-18": {
      "1. open": "1.1052",
      "2. high": "1.1090",
      "3. low": "1.1049",
      "4. close": "1.1071"
    },
    "2019-11-17": {
      "1. open": "1.1051",
      "2. high": "1.1054",
      "3. low": "1.1047",
      "4. close": "1.1051"
    },
    "2019-11-15": {
      "1. open": "1.1022",
      "2. high": "1.1057",
      "3. low": "1.1013",
      "4. close": "1.1051"
    },
    "2019-11-14": {
      "1. open": "1.1008",
      "2. high": "1.1027",
      "3. low": "1.0988",
      "4. close": "1.1022"
    },
    "2019-11-13": {
      "1. open": "1.1011",
      "2. high": "1.1020",
      "3. low": "1.0994",
      "4. close": "1.1008"
    },
    "2019-11-12": {
      "1. open": "1.1031",
      "2. high": "1.1039",
      "3. low": "1.1001",
      "4. close": "1.1011"
    },
    "2019-11-11": {
      "1. open": "1.1020",
      "2. high": "1.1043",
      "3. low": "1.1015",
      "4. close": "1.1031"
    },
    "2019-11-10": {
      "1. open": "1.1017",
      "2. high": "1.1025",
      "3. low": "1.1017",
      "4. close": "1.1020"
    },
    "2019-11-08": {
      "1. open": "1.1049",
      "2. high": "1.1055",
      "3. low": "1.1015",
      "4. close": "1.1019"
    },
    "2019-11-07": {
      "1. open": "1.1067",
      "2. high": "1.1092",
      "3. low": "1.1035",
      "4. close": "1.1049"
    },
    "2019-11-06": {
      "1. open": "1.1075",
      "2. high": "1.1093",
      "3. low": "1.1063",
      "4. close": "1.1067"
    },
    "2019-11-05": {
      "1. open": "1.1122",
      "2. high": "1.1140",
      "3. low": "1.1062",
      "4. close": "1.1075"
    },
    "2019-11-04": {
      "1. open": "1.1165",
      "2. high": "1.1176",
      "3. low": "1.1120",
      "4. close": "1.1122"
    },
    "2019-11-03": {
      "1. open": "1.1165",
      "2. high": "1.1170",
      "3. low": "1.1162",
      "4. close": "1.1165"
    },
    "2019-11-01": {
      "1. open": "1.1152",
      "2. high": "1.1172",
      "3. low": "1.1127",
      "4. close": "1.1164"
    },
    "2019-10-31": {
      "1. open": "1.1153",
      "2. high": "1.1176",
      "3. low": "1.1130",
      "4. close": "1.1151"
    },
    "2019-10-30": {
      "1. open": "1.1112",
      "2. high": "1.1155",
      "3. low": "1.1079",
      "4. close": "1.1153"
    },
    "2019-10-29": {
      "1. open": "1.1098",
      "2. high": "1.1119",
      "3. low": "1.1072",
      "4. close": "1.1112"
    },
    "2019-10-28": {
      "1. open": "1.1082",
      "2. high": "1.1107",
      "3. low": "1.1071",
      "4. close": "1.1098"
    },
    "2019-10-27": {
      "1. open": "1.1085",
      "2. high": "1.1085",
      "3. low": "1.1074",
      "4. close": "1.1081"
    },
    "2019-10-25": {
      "1. open": "1.1102",
      "2. high": "1.1123",
      "3. low": "1.1071",
      "4. close": "1.1080"
    },
    "2019-10-24": {
      "1. open": "1.1133",
      "2. high": "1.1163",
      "3. low": "1.1091",
      "4. close": "1.1103"
    },
    "2019-10-23": {
      "1. open": "1.1131",
      "2. high": "1.1140",
      "3. low": "1.1105",
      "4. close": "1.1132"
    },
    "2019-10-22": {
      "1. open": "1.1150",
      "2. high": "1.1157",
      "3. low": "1.1116",
      "4. close": "1.1131"
    },
    "2019-10-21": {
      "1. open": "1.1157",
      "2. high": "1.1179",
      "3. low": "1.1138",
      "4. close": "1.1150"
    },
    "2019-10-20": {
      "1. open": "1.1145",
      "2. high": "1.1165",
      "3. low": "1.1135",
      "4. close": "1.1157"
    },
    "2019-10-18": {
      "1. open": "1.1125",
      "2. high": "1.1183",
      "3. low": "1.1113",
      "4. close": "1.1182"
    },
    "2019-10-17": {
      "1. open": "1.1075",
      "2. high": "1.1140",
      "3. low": "1.1063",
      "4. close": "1.1124"
    },
    "2019-10-16": {
      "1. open": "1.1033",
      "2. high": "1.1086",
      "3. low": "1.1021",
      "4. close": "1.1075"
    },
    "2019-10-15": {
      "1. open": "1.1028",
      "2. high": "1.1046",
      "3. low": "1.0989",
      "4. close": "1.1033"
    },
    "2019-10-14": {
      "1. open": "1.1030",
      "2. high": "1.1043",
      "3. low": "1.1012",
      "4. close": "1.1028"
    },
    "2019-10-13": {
      "1. open": "1.1045",
      "2. high": "1.1045",
      "3. low": "1.1028",
      "4. close": "1.1030"
    },
    "2019-10-11": {
      "1. open": "1.1007",
      "2. high": "1.1063",
      "3. low": "1.1000",
      "4. close": "1.1035"
    },
    "2019-10-10": {
      "1. open": "1.0984",
      "2. high": "1.1034",
      "3. low": "1.0978",
      "4. close": "1.1007"
    },
    "2019-10-09": {
      "1. open": "1.0958",
      "2. high": "1.0991",
      "3. low": "1.0953",
      "4. close": "1.0985"
    },
    "2019-10-08": {
      "1. open": "1.0970",
      "2. high": "1.0996",
      "3. low": "1.0939",
      "4. close": "1.0958"
    },
    "2019-10-07": {
      "1. open": "1.0981",
      "2. high": "1.1001",
      "3. low": "1.0960",
      "4. close": "1.0972"
    },
    "2019-10-06": {
      "1. open": "1.0982",
      "2. high": "1.0984",
      "3. low": "1.0967",
      "4. close": "1.0981"
    },
    "2019-10-04": {
      "1. open": "1.0972",
      "2. high": "1.0999",
      "3. low": "1.0956",
      "4. close": "1.0975"
    },
    "2019-10-03": {
      "1. open": "1.0959",
      "2. high": "1.0999",
      "3. low": "1.0939",
      "4. close": "1.0972"
    },
    "2019-10-02": {
      "1. open": "1.0931",
      "2. high": "1.0964",
      "3. low": "1.0903",
      "4. close": "1.0959"
    },
    "2019-10-01": {
      "1. open": "1.0898",
      "2. high": "1.0943",
      "3. low": "1.0878",
      "4. close": "1.0931"
    },
    "2019-09-30": {
      "1. open": "1.0944",
      "2. high": "1.0948",
      "3. low": "1.0884",
      "4. close": "1.0898"
    },
    "2019-09-29": {
      "1. open": "1.0938",
      "2. high": "1.0946",
      "3. low": "1.0938",
      "4. close": "1.0944"
    },
    "2019-09-27": {
      "1. open": "1.0920",
      "2. high": "1.0959",
      "3. low": "1.0904",
      "4. close": "1.0939"
    },
    "2019-09-26": {
      "1. open": "1.0949",
      "2. high": "1.0967",
      "3. low": "1.0908",
      "4. close": "1.0920"
    },
    "2019-09-25": {
      "1. open": "1.1019",
      "2. high": "1.1020",
      "3. low": "1.0936",
      "4. close": "1.0949"
    },
    "2019-09-24": {
      "1. open": "1.0995",
      "2. high": "1.1024",
      "3. low": "1.0982",
      "4. close": "1.1019"
    },
    "2019-09-23": {
      "1. open": "1.1018",
      "2. high": "1.1025",
      "3. low": "1.0964",
      "4. close": "1.0995"
    },
    "2019-09-22": {
      "1. open": "1.1011",
      "2. high": "1.1020",
      "3. low": "1.1009",
      "4. close": "1.1018"
    },
    "2019-09-20": {
      "1. open": "1.1045",
      "2. high": "1.1068",
      "3. low": "1.0995",
      "4. close": "1.1017"
    },
    "2019-09-19": {
      "1. open": "1.1031",
      "2. high": "1.1074",
      "3. low": "1.1021",
      "4. close": "1.1045"
    },
    "2019-09-18": {
      "1. open": "1.1071",
      "2. high": "1.1076",
      "3. low": "1.1012",
      "4. close": "1.1031"
    },
    "2019-09-17": {
      "1. open": "1.1005",
      "2. high": "1.1075",
      "3. low": "1.0989",
      "4. close": "1.1071"
    },
    "2019-09-16": {
      "1. open": "1.1079",
      "2. high": "1.1086",
      "3. low": "1.0992",
      "4. close": "1.1005"
    },
    "2019-09-15": {
      "1. open": "1.1076",
      "2. high": "1.1087",
      "3. low": "1.1068",
      "4. close": "1.1079"
    },
    "2019-09-13": {
      "1. open": "1.1058",
      "2. high": "1.1110",
      "3. low": "1.1054",
      "4. close": "1.1071"
    },
    "2019-09-12": {
      "1. open": "1.1010",
      "2. high": "1.1087",
      "3. low": "1.0926",
      "4. close": "1.1058"
    },
    "2019-09-11": {
      "1. open": "1.1049",
      "2. high": "1.1056",
      "3. low": "1.0983",
      "4. close": "1.1010"
    },
    "2019-09-10": {
      "1. open": "1.1049",
      "2. high": "1.1059",
      "3. low": "1.1029",
      "4. close": "1.1048"
    },
    "2019-09-09": {
      "1. open": "1.1025",
      "2. high": "1.1068",
      "3. low": "1.1014",
      "4. close": "1.1049"
    },
    "2019-09-08": {
      "1. open": "1.1025",
      "2. high": "1.1028",
      "3. low": "1.1022",
      "4. close": "1.1025"
    },
    "2019-09-06": {
      "1. open": "1.1036",
      "2. high": "1.1057",
      "3. low": "1.1018",
      "4. close": "1.1029"
    },
    "2019-09-05": {
      "1. open": "1.1034",
      "2. high": "1.1085",
      "3. low": "1.1016",
      "4. close": "1.1035"
    },
    "2019-09-04": {
      "1. open": "1.0970",
      "2. high": "1.1038",
      "3. low": "1.0967",
      "4. close": "1.1034"
    },
    "2019-09-03": {
      "1. open": "1.0966",
      "2. high": "1.0979",
      "3. low": "1.0924",
      "4. close": "1.0971"
    },
    "2019-09-02": {
      "1. open": "1.0992",
      "2. high": "1.0994",
      "3. low": "1.0956",
      "4. close": "1.0966"
    },
    "2019-09-01": {
      "1. open": "1.0987",
      "2. high": "1.0998",
      "3. low": "1.0981",
      "4. close": "1.0991"
    },
    "2019-08-30": {
      "1. open": "1.1058",
      "2. high": "1.1060",
      "3. low": "1.0961",
      "4. close": "1.0989"
    },
    "2019-08-29": {
      "1. open": "1.1084",
      "2. high": "1.1093",
      "3. low": "1.1041",
      "4. close": "1.1058"
    },
    "2019-08-28": {
      "1. open": "1.1092",
      "2. high": "1.1098",
      "3. low": "1.1072",
      "4. close": "1.1083"
    },
    "2019-08-27": {
      "1. open": "1.1100",
      "2. high": "1.1116",
      "3. low": "1.1084",
      "4. close": "1.1091"
    },
    "2019-08-26": {
      "1. open": "1.1154",
      "2. high": "1.1154",
      "3. low": "1.1093",
      "4. close": "1.1099"
    },
    "2019-08-25": {
      "1. open": "1.1145",
      "2. high": "1.1164",
      "3. low": "1.1139",
      "4. close": "1.1154"
    },
    "2019-08-23": {
      "1. open": "1.1082",
      "2. high": "1.1153",
      "3. low": "1.1050",
      "4. close": "1.1143"
    },
    "2019-08-22": {
      "1. open": "1.1091",
      "2. high": "1.1113",
      "3. low": "1.1062",
      "4. close": "1.1082"
    },
    "2019-08-21": {
      "1. open": "1.1099",
      "2. high": "1.1107",
      "3. low": "1.1079",
      "4. close": "1.1091"
    },
    "2019-08-20": {
      "1. open": "1.1082",
      "2. high": "1.1107",
      "3. low": "1.1064",
      "4. close": "1.1099"
    },
    "2019-08-19": {
      "1. open": "1.1095",
      "2. high": "1.1114",
      "3. low": "1.1075",
      "4. close": "1.1081"
    },
    "2019-08-18": {
      "1. open": "1.1095",
      "2. high": "1.1101",
      "3. low": "1.1087",
      "4. close": "1.1095"
    },
    "2019-08-16": {
      "1. open": "1.1110",
      "2. high": "1.1112",
      "3. low": "1.1065",
      "4. close": "1.1090"
    },
    "2019-08-15": {
      "1. open": "1.1144",
      "2. high": "1.1159",
      "3. low": "1.1090",
      "4. close": "1.1110"
    },
    "2019-08-14": {
      "1. open": "1.1175",
      "2. high": "1.1191",
      "3. low": "1.1129",
      "4. close": "1.1144"
    },
    "2019-08-13": {
      "1. open": "1.1214",
      "2. high": "1.1229",
      "3. low": "1.1168",
      "4. close": "1.1174"
    },
    "2019-08-12": {
      "1. open": "1.1202",
      "2. high": "1.1231",
      "3. low": "1.1161",
      "4. close": "1.1214"
    },
    "2019-08-11": {
      "1. open": "1.1200",
      "2. high": "1.1204",
      "3. low": "1.1194",
      "4. close": "1.1202"
    },
    "2019-08-09": {
      "1. open": "1.1185",
      "2. high": "1.1223",
      "3. low": "1.1182",
      "4. close": "1.1197"
    }
  }
}




*/