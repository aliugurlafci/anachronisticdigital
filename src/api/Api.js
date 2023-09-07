import axios from 'axios';
import { Decode } from '../components/index';

export const apiUrl = "https://api.anachronisticdigital.com/api";

export const machineUrl = "https://solversedigital.com";

export function GenerateHeader(origin, type) {
    const headerList = new Headers();

    headerList.append('Content-Type', type);
    headerList.append('Access-Control-Allow-Origin', origin);
    return headerList;
}
// Site Loading Api Call
export async function DownloadSiteConfig(jData) {
    const header = await GenerateHeader('*', 'application/json');
    const path = apiUrl + "/config";
    const { data } = await axios.post(path, jData, { headers: header });
    return data;
}
export async function GetInformation() {
    const { data } = await axios.get('https://geolocation-db.com/json/');
    const mi = JSON.stringify({
        ipv4: data.IPv4,
        country: data.country_name,
        latitude: data.latitude,
        longitude: data.longitude
    })
    sessionStorage.setItem("mi", JSON.stringify(Decode(mi)));
}
export async function UpdateUserLog(jData) {
    const header = await GenerateHeader('*', 'application/json');
    const path = apiUrl + "/log";
    const { data } = await axios.post(path, jData, { headers: header });
    if (data.status === 200) { }
}
//  Admin Page Api Calls
export async function UpdateOpening(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/opening";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateWhatWeDo(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const path = apiUrl + "/whatWeDo";

        const { data } = await axios.post(path, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateAboutUs(jData) {
    try {
        const header = GenerateHeader(machineUrl, "application/json");
        const path = apiUrl + "/aboutUs";

        const { data } = await axios.post(path, jData, { headers: header });
        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdatePartners(jData) {
    try {
        const header = GenerateHeader(machineUrl, "application/json");
        const path = apiUrl + "/partners";

        const { data } = await axios.post(path, jData, { headers: header });
        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateSocialAccounts(jData) {
    try {
        const header = GenerateHeader(machineUrl, "application/json");
        const path = apiUrl + "/social";

        const { data } = await axios.post(path, jData, { headers: header });
        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateWhyChooseUs(jData) {
    try {
        const header = GenerateHeader(machineUrl, "application/json");
        const path = apiUrl + "/whyChooseUs";

        const { data } = await axios.post(path, jData, { headers: header });
        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateConditions(jData) {
    try {
        const header = GenerateHeader(machineUrl, "application/json");
        const path = apiUrl + "/conditions";

        const { data } = await axios.post(path, jData, { headers: header });
        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateFenomens(jData) {
    try {
        const header = GenerateHeader(machineUrl, "application/json");
        const path = apiUrl + "/phenomenon";

        const { data } = await axios.post(path, jData, { headers: header });
        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateMembers(jData) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/members";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateState(jData) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/site-state";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateDevelopers(jData) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/update-developer";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateSolutions(jData) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/update-solutions";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateCommunity(jData) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/update-community";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdatePricingCards(jData) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/pricingCards";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateIconList(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/iconSet";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function LoginQueue(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/loginQueue";
        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function AcceptQueue(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/acceptQueue";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function DeclineQueue(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/declineQueue";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateNews(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/news";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateProjects(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/projects";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdateSpecialOffers(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/special-offers";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function LoadUserList(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/user-list";

        const { data } = await axios.post(apiPath, jData, { headers: header });
        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function RemoveUser(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/remove-user";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UserReference(jData) {
    try {
        const header = await GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/user-reference";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
// Users Api Calls
export async function LoginApi(jData) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/login";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function RegisterApi(form) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/register";

        const { data } = await axios.post(apiPath, form, { headers: header });
        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function CheckEmail(form) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/email-control";

        const { data } = await axios.post(apiPath, form, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function CheckEmailControl(form) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/reset-password";

        const { data } = await axios.post(apiPath, form, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function UpdatePassword(form) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/update-password";

        const { data } = await axios.post(apiPath, form, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function WorkWithUsApi(form) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/work-with-us";

        const { data } = await axios.post(apiPath, form, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function MultipleFenomenApi(jData) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/multiple-fenomen";

        const { data } = await axios.post(apiPath, jData, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function WhatDoWeDoApi(form) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/wwd-contact";

        const { data } = await axios.post(apiPath, form, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function SingleFenomenApi(form) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/single-fenomen";

        const { data } = await axios.post(apiPath, form, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function CommunityApi(form) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/community";

        const { data } = await axios.post(apiPath, form, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function DeveloperApi(form) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/developer";

        const { data } = await axios.post(apiPath, form, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function WorkFenomenPackage(form) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/fenomen-package";

        const { data } = await axios.post(apiPath, form, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
export async function SupportApi(form) {
    try {
        const header = GenerateHeader(machineUrl, 'application/json');
        const apiPath = apiUrl + "/support";

        const { data } = await axios.post(apiPath, form, { headers: header });

        return data;
    }
    catch (ex) {
        return ex;
    }
}
//User key section
export function GenerateUserKey(length) {
    const root = "abcdefghijklmnopqrstuvwxyz" + "abcdefghijklmnopqrstuvwxyz".toUpperCase() + "0123456789";
    var key = "";
    for (let i = 0; i < length; i++) {

        key += root[Math.floor(Math.random() * (root.length - 1))];

        if ((i + 1) % 4 === 0 && (i + 1) !== length) {
            key += "-";
        }
    }
    return key;
}