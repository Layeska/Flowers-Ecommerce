const welcomeTemplate = (userName) => 
    `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
        <head>
            <meta charset="UTF-8">
            <meta content="width=device-width, initial-scale=1" name="viewport">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta content="telephone=no" name="format-detection">
            <title>Flower Shop</title><!--[if (mso 16)]>
                <style type="text/css">
                    a {text-decoration: none;}
                </style>
            <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG></o:AllowPNG>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            <style type="text/css">
                #outlook a {
                    padding:0;
                }
                .ExternalClass {
                    width:100%;
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                    line-height:100%;
                }
                .es-button {
                    mso-style-priority:100!important;
                    text-decoration:none!important;
                }
                a[x-apple-data-detectors] {
                    color:inherit!important;
                    text-decoration:none!important;
                    font-size:inherit!important;
                    font-family:inherit!important;
                    font-weight:inherit!important;
                    line-height:inherit!important;
                }
                .es-desk-hidden {
                    display:none;
                    float:left;
                    overflow:hidden;
                    width:0;
                    max-height:0;
                    line-height:0;
                    mso-hide:all;
                }
                [data-ogsb] .es-button {
                    border-width:0!important;
                    padding:10px 20px 10px 20px!important;
                }
                [data-ogsb] .es-button.es-button-1 {
                    padding:10px 20px!important;
                }
                @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:24px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:28px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
            </style>
        </head>
        <body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;padding:0;Margin:0">
            <div class="es-wrapper-color" style="background-color:#F6F6F6"><!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#f6f6f6"></v:fill>
                </v:background>
                <![endif]-->
                <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
                    <tr class="gmail-fix" height="0" style="border-collapse:collapse">
                    <td style="padding:0;Margin:0">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px">
                        <tr style="border-collapse:collapse">
                        <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img src="https://ypbbtx.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px" alt width="600" height="1"></td>
                        </tr>
                    </table></td>
                    </tr>
                    <tr style="border-collapse:collapse">
                    <td valign="top" style="padding:0;Margin:0">
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr style="border-collapse:collapse">
                        <td class="es-adaptive" align="center" style="padding:0;Margin:0">
                        <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                            <tr style="border-collapse:collapse">
                            <td align="left" style="padding:10px;Margin:0"><!--[if mso]><table style="width:580px"><tr><td style="width:280px" valign="top"><![endif]-->
                            <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                <tr style="border-collapse:collapse">
                                <td align="left" style="padding:0;Margin:0;width:280px">
                                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr style="border-collapse:collapse">
                                    <td class="es-infoblock es-m-txt-c" align="left" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">Put your preheader text here</p></td>
                                    </tr>
                                </table></td>
                                </tr>
                            </table><!--[if mso]></td><td style="width:20px"></td><td style="width:280px" valign="top"><![endif]-->
                            <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                <tr style="border-collapse:collapse">
                                <td align="left" style="padding:0;Margin:0;width:280px">
                                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr style="border-collapse:collapse">
                                    <td align="right" class="es-infoblock es-m-txt-c" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px"><a href="https://viewstripo.email/" class="view" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">View in browser</a></p></td>
                                    </tr>
                                </table></td>
                                </tr>
                            </table><!--[if mso]></td></tr></table><![endif]--></td>
                            </tr>
                        </table></td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0">
                        <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                            <tr style="border-collapse:collapse">
                            <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-repeat:no-repeat" align="left">
                            <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr style="border-collapse:collapse">
                                    <td align="center" style="padding:0;Margin:0;font-size:0"><a href="https://viewstripo.email/" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#C04A81;font-size:14px"><img src="https://ypbbtx.stripocdn.email/content/guids/CABINET_7bc1ef7fc538809882d0ba8c4de5ee10/images/54511525946840048.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="162"></a></td>
                                    </tr>
                                </table></td>
                                </tr>
                            </table></td>
                            </tr>
                            <tr style="border-collapse:collapse">
                            <td style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;background-color:#333333" bgcolor="#333333" align="left">
                            <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr style="border-collapse:collapse">
                                    <td style="padding:0;Margin:0">
                                    <table class="es-menu" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                        <tr class="links" style="border-collapse:collapse">
                                        <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:0px;border:0" width="25.00%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#ffffff;font-size:14px" href="https://viewstripo.email/">Flowers</a></td>
                                        <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:0px;border:0" width="25.00%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#ffffff;font-size:14px" href="https://viewstripo.email/">Plants</a></td>
                                        <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:0px;border:0" width="25.00%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#ffffff;font-size:14px" href="https://viewstripo.email/">Gallery</a></td>
                                        <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:0px;border:0" width="25.00%" bgcolor="transparent" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#ffffff;font-size:14px" href="https://viewstripo.email/">Sale</a></td>
                                        </tr>
                                    </table></td>
                                    </tr>
                                </table></td>
                                </tr>
                            </table></td>
                            </tr>
                        </table></td>
                        </tr>
                    </table>
                    <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0">
                        <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                            <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0">
                            <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr style="border-collapse:collapse">
                                    <td style="padding:0;Margin:0;position:relative" align="center"><a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#C04A81;font-size:16px"><img class="adapt-img" src="https://ypbbtx.stripocdn.email/content/guids/bannerImgGuid/images/image16696140311987784.png" alt="Welcome" title="Welcome" width="600" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                    </tr>
                                </table></td>
                                </tr>
                            </table></td>
                            </tr>
                        </table></td>
                        </tr>
                    </table>
                    <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0">
                        <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                            <tr style="border-collapse:collapse">
                            <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-repeat:no-repeat" align="left">
                            <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                <td valign="top" align="center" style="padding:0;Margin:0;width:520px">
                                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr style="border-collapse:collapse">
                                    <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:20px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;font-size:24px;font-style:normal;font-weight:normal;color:#666666">Welcome to Flowers Shop!</h2></td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                    <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#666666;font-size:16px">${userName} thank you for registering with the Flowers Shop ❤️</p></td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                    <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#666666;font-size:16px">We are very grateful that you are interested in our updates. Please take advantage of this discount code (15% on your next purchase or free shipping on your next purchase) as a token of our appreciation.</p></td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                    <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#666666;font-size:16px">Let us know if we can help you with anything</p></td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                    <td class="es-m-txt-c" align="center" style="padding:0;Margin:0"><!--[if mso]><a href="https://viewstripo.email/" target="_blank" hidden>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email/" 
                                style="height:39px; v-text-anchor:middle; width:150px" arcsize="50%" stroke="f"  fillcolor="#ff80ab">
                        <w:anchorlock></w:anchorlock>
                        <center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>Cod #9636NAV</center>
                    </v:roundrect></a>
                <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:transparent;background:#ff80ab;border-width:0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a href="https://viewstripo.email/" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;border-style:solid;border-color:#ff80ab;border-width:10px 20px;display:inline-block;background:#ff80ab;border-radius:30px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center">Cod #9636NAV</a></span><!--<![endif]--></td>
                                    </tr>
                                </table></td>
                                </tr>
                            </table></td>
                            </tr>
                        </table></td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0">
                        <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;border-top:1px solid #ff80ab;width:600px" cellspacing="0" cellpadding="0" align="center">
                            <tr style="border-collapse:collapse">
                            <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0"
                                            cellspacing="0"><tr><td style="width:180px" valign="top"><![endif]-->
                            <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                <tr style="border-collapse:collapse">
                                <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:180px">
                                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr style="border-collapse:collapse">
                                    <td align="left" style="padding:0;Margin:0;padding-bottom:15px;font-size:0"><a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#999999;font-size:12px"><img src="https://ypbbtx.stripocdn.email/content/guids/CABINET_7bc1ef7fc538809882d0ba8c4de5ee10/images/54511525946840048.png" alt="Flowers logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Flowers logo" width="135"></a></td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                    <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#999999;font-size:12px">flowershop@gmail.com</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#999999;font-size:12px">© 2022&nbsp;Flowers</p></td>
                                    </tr>
                                </table></td>
                                </tr>
                            </table><!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
                            <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                <td align="left" style="padding:0;Margin:0;width:360px">
                                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr style="border-collapse:collapse">
                                    <td align="left" style="padding:0;Margin:0;padding-bottom:15px;font-size:0">
                                    <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                        <tr style="border-collapse:collapse">
                                        <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Facebook" src="https://ypbbtx.stripocdn.email/content/assets/img/social-icons/circle-gray-bordered/facebook-circle-gray-bordered.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                        <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Twitter" src="https://ypbbtx.stripocdn.email/content/assets/img/social-icons/circle-gray-bordered/twitter-circle-gray-bordered.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                        <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Instagram" src="https://ypbbtx.stripocdn.email/content/assets/img/social-icons/circle-gray-bordered/instagram-circle-gray-bordered.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                        <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Youtube" src="https://ypbbtx.stripocdn.email/content/assets/img/social-icons/circle-gray-bordered/youtube-circle-gray-bordered.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                        </tr>
                                    </table></td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                    <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#999999;font-size:12px">You are receiving this email because you have visited our site or asked us about regular newsletter. You can <a class="unsubscribe" target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#999999;font-size:12px">unsubscribe here</a> or <a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#999999;font-size:12px">update your subscription preferences</a>.</p></td>
                                    </tr>
                                </table></td>
                                </tr>
                            </table><!--[if mso]></td></tr></table><![endif]--></td>
                            </tr>
                        </table></td>
                        </tr>
                    </table>
                    <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0">
                        <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                            <tr style="border-collapse:collapse">
                            <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
                            <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr style="border-collapse:collapse">
                                    <td align="center" style="padding:0;Margin:0;display:none"></td>
                                    </tr>
                                </table></td>
                                </tr>
                            </table></td>
                            </tr>
                        </table></td>
                        </tr>
                    </table></td>
                    </tr>
                </table>
            </div>
        </body>
    </html>`;

module.exports = welcomeTemplate;