<template>
  <div class="sectionPage">
    <h2>{{ text.en.head }}</h2>
    <p><span v-html="text.en.paragraphs" /></p>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      text: {
        en: {
          head: `OUR USE OF COOKIES, WEB BEACONS, AND SIMILAR TECHNOLOGIES`,
          paragraphs: `
Last Revised: 01/02/2020
 <br /><br />
First and foremost, we DO NOT sell your personal information. However, when you visit or interact with our sites, services, applications, tools or messaging, we or our authorized service providers may use cookies, web beacons, and other similar technologies to make your experience better, faster and safer, for advertising purposes and to allow us to continuously improve our sites, services, applications and tools. Any personal information or data collected by these technologies is used only by us or by our authorized service providers on our behalf.
<br /><br />
You're in control<br />
Other than for those that are considered “essential” (more on that below), if you do not wish to accept these technologies in connection with your visit to or use of our sites, services, applications, tools or messaging, you can contact us at  info@acrylplatform.com.
<br /><br />
What are cookies, web beacons and similar technologies<br />
These technologies are essentially small data files placed on your computer, tablet, mobile phone or other device (“collectively, a “device”) that allows us to record information when you visit or interact with our websites, service, applications, messaging, and other tools. Though often these technologies are generically referred to as “Cookies,” each functions slightly differently, and is better explained below:
<br /><br />
Cookies: Cookies are small (often encrypted) text files placed in the memory of your browser or device when you visit a website or view a message. Cookies allow a website to recognize a particular device or browser. There are several types of cookies:
<br /><br />
• Session cookies expire at the end of your browser session and allow us to link your actions during that particular browser session.
• Persistent cookies are stored on your device in between browser sessions, allowing us to remember your preferences or actions across multiple sites.
• First-party cookies are those set by a website that is being visited by the user at the time in order to preserve your settings (e.g., while on our site).
• Third-party cookies are placed in your browser by a website, or domain, that is not the website or domain that you are currently visiting. If a user visits a website and another entity sets a cookie through that website this would be a third-party cookie.
<br /><br />
Cookies are used for a variety of purposes on our website. As an example, we use cookies to store information that allows us to present our site in your local language, or prices in local currency. We also use cookies to communicate data to our servers when you visit, allowing you to stay logged in to your account during your visit or maintain the site preferences you select. Preventing your browser from accepting 1st party cookies will prevent the placement of some cookies that are classified as “Essential”.
<br /><br />
Web beacons: A web beacon (also called “tracking pixels” or “image tags”) is a small file (most often a transparent, 1x1 GIF file) that is loaded on our web pages. These pixels may work in concert with cookies to collect information about your visit, your web browser/device, browsing activity, or onsite behavior and provide that information to service providers. Pixels are most commonly used to collect anonymous traffic metrics (page visits, button clicks, order completion) used to analyze site performance.
<br /><br />
Scripts: A script is a small piece of website code placed on our websites to power customer service tools like live chat, allow for the delivery of video tutorials in our help section, and allow us to provide interactive experiences to visitors. They are also used to collect data that we use for website analytics, or to provide data on the effectiveness of our advertising.
Similar technologies: Technologies that store information in your browser or device utilizing local shared objects or local storage, such as flash cookies, HTML 5 cookies, and other web application software methods. These technologies can operate across all of your browsers. In some instances, these technologies may not be fully managed by your browser and may require management directly through your installed applications or device. We do not use these technologies for storing information to target advertising to you on or off our sites.
<br /><br />
What technologies do we use and why<br />
Our cookies, web beacons and similar technologies serve various purposes, but generally they (1) are necessary or essential to the functioning of our sites, services, applications, tools or messaging, (2) help us improve the performance of or provide you extra functionality of the same, (3) help us to serve relevant and targeted advertisements, or (4) allow us to offer support tools that you utilize to interact with our care guides:
<br /><br />
Strictly Necessary or Essential: "Strictly necessary" or “essential” cookies, web beacons and similar technologies let you move around the website and use essential features like secure areas and shopping baskets. Without these technologies, services you have asked for cannot be provided. Please note that these technologies do not gather any information about you that could be used for marketing or remembering where you've been on the internet. Accepting these technologies is a condition of using our sites, services, applications, tools or messaging, so if you utilize tools that might prevent these from loading, we can't guarantee your use or how the security therein will perform during your visit.
<br /><br />
Performance: Performance technologies may include first or third-party cookies, web beacons/pixels, and scripts placed in order to gather information about how you use our website (pages you visit, if you experience any errors, load times). These cookies do not collect any information that could identify you and are only used to help us improve how our website works, understand the interests of our users, and measure how effective our content is by providing anonymous statistics and data regarding how our website is used.
<br /><br />
Advertising: Advertising technology may include first or third-party cookies, web beacons/pixels, and scripts placed in order to gather information on the effectiveness of our marketing efforts, deliver personalized content, or to generate data that allows for the delivery of advertising relevant to your specific interests on our sites, as well as third-party websites. We also utilize 3rd party service providers to assist us in delivering on the same functions, which means that our authorized service providers may also place cookies, web beacons and similar technologies on your device via our services (first and third party cookies). They may also collect information that helps them identify your device, such as IP address, or other unique or device identifiers.
<br /><br />
Support: Support technologies may include first or third-party cookies, web beacons / pixels, and scripts placed in order to provide tools for you to interact with our customer support teams. This technology allows us to provide chat services, gather customer feedback, and other tools used to support our visitors. Data collected for these purposes is never used for marketing or advertising purposes.
<br /><br />
How to manage, control and delete these technologies
 <br /><br />
You may block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) it may limit your use of certain features or functions on our website or service. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies as soon as you visit our site.
<br /><br />
Internet browsers allow you to change your cookie settings. These settings are usually found in the 'options' or 'preferences' menu of your internet browser. In order to understand these settings, the following links may be helpful. Otherwise you should use the 'Help' option in your internet browser for more details.
<br /><br />
<a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" style="color: #0E60FE;">• Cookie settings in Internet Explorer</a><br />
<a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectlocale=en-US&redirectslug=enable-and-disable-cookies-website-preferences" style="color: #0E60FE;">• Cookie settings in Firefox</a><br />
<a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en" style="color: #0E60FE;">• Cookie settings in Chrome</a><br />
<a href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac" style="color: #0E60FE;">• Cookie settings in Safari</a><br />
<br /><br />
If you wish to withdraw your consent at any time, you will need to delete your cookies using your internet browser settings.
<br /><br />
More information about cookies
<br /><br />
• Useful information about cookies, including information about deleting or blocking cookies, can be found at: <a  style="color: #0E60FE;" href="https://www.allaboutcookies.org">https://www.allaboutcookies.org</a><br />
• A guide to behavioral advertising and online privacy has been produced by the internet advertising industry which can be found at: <a style="color: #0E60FE;" href="http://www.youronlinechoices.com">http://www.youronlinechoices.com</a><br />
• The UK Information Commissioner's Office (ICO) cookie guide can be found on the ICO website: <a  style="color: #0E60FE;" href="https://ico.org.uk/your-data-matters/online/cookies/">https://ico.org.uk/your-data-matters/online/cookies/</a><br />
<br /><br />
Contact Us<br />
We hope the information in this policy provides you with clear information about the technologies we use and the purposes for which we use them, but it you have any additional questions, or require any additional information, please review our Privacy Policy or contact us at info@acrylplatform.com.`
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/index.scss";
.sectionPage {
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 100px auto;
}
</style>
