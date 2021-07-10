<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" Async="false" CodeBehind="Default.aspx.cs" Inherits="WebApplication1._Default" %>

 

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">  

    <app-top-navigation></app-top-navigation>
    <%: Scripts.Render("~/bundles/TopNavigationModule") %>    

    <app-orange-heading></app-orange-heading>
     <%: Scripts.Render("~/bundles/OrangeHeadingModule") %>

</asp:Content>
     
     
       



<%--<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <base href="/">
    <app-root></app-root>
    <script src="Scripts/Angular/main.b1c8b2db23a6b60cdb69.js"></script>
        <script src="Scripts/Angular/polyfills.6414d517e99302e8faa3.js"></script>
        <script src="Scripts/Angular/runtime.3c98b8b43b8f7119c397.js"></script>
      <link href="Scripts/Angular/styles.31d6cfe0d16ae931b73c.css" rel="stylesheet" />

</head>

<body>
    <form id="form1" runat="server">
        <div>
            <p>This is for testing the body</p>
        </div>
    </form>
</body>
</html>--%>