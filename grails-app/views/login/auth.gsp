<!--
  tranSMART - translational medicine data mart
  
  Copyright 2008-2012 Janssen Research & Development, LLC.
  
  This product includes software developed at Janssen Research & Development, LLC.
  
  This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
  as published by the Free Software  * Foundation, either version 3 of the License, or (at your option) any later version, along with the following terms:
  1.	You may convey a work based on this program in accordance with section 5, provided that you retain the above notices.
  2.	You may convey verbatim copies of this program code as you receive it, in any medium, provided that you retain the above notices.
  
  This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS    * FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
  
 
-->

<head>
<meta name='layout' content='main' />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>${grailsApplication.config.com.recomdata.searchtool.appTitle}</title>

<style type='text/css' media='screen'>
#login {
	margin:15px 0px;
	padding:0px;
	text-align:center;
}

#login .inner {
	width:260px;
	margin:0px auto;
	text-align:left;
	padding:10px;
	border-top:1px dashed #499ede;
	border-bottom:1px dashed #499ede;
	background-color:#EEF;
}
#login .inner .fheader {
	padding:4px;margin:3px 0px 3px 0;color:#2e3741;font-size:14px;font-weight:bold;
}
#login .inner .cssform p {
	clear: left;
	margin: 0;
	padding: 5px 0 8px 0;
	padding-left: 105px;
	border-top: 1px dashed gray;
	margin-bottom: 10px;
	height: 1%;
}
#login .inner .cssform input[type='text'] {
	width: 120px;
}
#login .inner .cssform label {
	font-weight: bold;
	float: left;
	margin-left: -105px;
	width: 100px;
}
#login .inner .login_message {color:red;}
#login .inner .text_ {width:120px;}
#login .inner .chk {height:12px;}
</style>
</head>
<body>

<div align="center" style="clear:both; margin-left:auto; margin-right:auto; margin-top:20px;text-align:center">
<table style="width:auto; border:0px; text-align:center; margin:auto;" align="center">
	<tr><td>&nbsp;</td></tr>
	<tr>
		<td colspan=3 valign="middle" style="text-align:center;vertical-align:middle;border:1px;font-size:11px" nowrap="nowrap">
			<div style="margin-right:auto;margin-left:auto;width:435px;">
   				<div class="x-box-tl">
					<div class="x-box-tr">
						<div class="x-box-tc">
						</div>
					</div>
				</div>
   				<div class="x-box-ml">
					<div class="x-box-mr">
						<div class="x-box-mc" style="text-align:left">
       						<h3 style="margin-bottom:20px; text-align:left; font-size:11px; color: #006dba;">
								Please login...
							</h3>
							<g:if test='${flash.message}'>
								<div class='login_message' style="color:red; font-size:12px;">${flash.message}</div>
                                <br>
							</g:if>
							<form action='${postUrl}' method='POST' id='loginForm' class='cssform'>
   								<table style="border:0px; text-align:center;">
									<tr>
   										<td>
											<label for='username' style="font-weight:bold"><g:message code="springSecurity.login.username.label"/> :</label>
										</td>
										<td style="white-space:nowrap; width:250px;">
											<input type='text' class='text_' name='j_username' id='username' style="width:100%" autofocus/>
											<script>
											   if (!("autofocus" in document.createElement("input"))) {
												   document.getElementById("username").focus();
											   }
                                            </script>
										</td>
									</tr>
                                    <tr>
                                        <td>
                                            <label for='password' style="font-weight:bold"><g:message code="springSecurity.login.password.label"/> :</label>
                                        </td>
                                        <td>
                                            <input type='password' class='text_' name='j_password' id='password' style="width:100%"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for='remember_me' style="font-weight:bold"><g:message code="springSecurity.login.remember.me.label"/> :</label>
                                        </td>
                                        <td>
                                            <input type='checkbox' class='chk' name='${rememberMeParameter}' id='remember_me' <g:if test='${hasCookie}'>checked='checked'</g:if>/>
                                        </td>
                                    </tr>
									<tr>
                                        <td colspan="2" style="text-align:center">
                                            <br>
                                            <input type='submit' id='loginButton' value='${message(code: "springSecurity.login.button")}' style="width:100%" />
                                            <br><br>
                                        </td>
									</tr>
									<tr>
										<td colspan="2" style="font-size:10px;">
											Not a user? Contact <a href="mailto:${grailsApplication.config.com.recomdata.administrator}" target="_blank" style="text-decoration:underline;color:#0000FF">administrator</a> to request an account
										</td>
									</tr>

								</table>
							</form>
						</div>
					</div>
				</div>
   				<div class="x-box-bl">
					<div class="x-box-br">
						<div class="x-box-bc">
						</div>
					</div>
				</div>
			</div>
		</td>
	</tr>
	<tr><td>&nbsp;</td></tr>
	<tr><td>&nbsp;</td></tr>	
	<tr>
		<td valign="middle" style="text-align:center;vertical-align:middle;border:1px;font-size:11px;padding:0px 100px 0px 0px" nowrap="nowrap">
		<a href="http://medicine.umich.edu/medschool/" target="_blank">
		<img src="${resource(dir:'images',file:'umich-umms-logo.png')}" width="200" height="148" alt="University of Michigan - Medical School (logo)"/>
		</a>
		</td>
		<td valign="middle" style="text-align:center;vertical-align:middle;border:4px;font-size:11px;padding:0px 0px 0px 100px" nowrap="nowrap">
			<table>
				<tr><td colspan="4">
					<a href="http://portal.ncibi.org/gateway/" target="_blank">
					<img src="${resource(dir:'images/ncibi',file:'ncibi-large-logo.jpg')}" alt="NCIBI (logo)"/>
					</a>
				</td></tr>
				<tr><td colspan="4">&nbsp;</td></tr>
				<tr><td colspan="4" style="text-align:center; font-size:20; font-style: bold">
					<a href="http://portal.ncibi.org/gateway/tryourtools.html" target="_blank">
					NCIBI Tools
					</a>
				</td></tr>
				<tr><td colspan="4">&nbsp;</td></tr>
				<tr>
					<td style="text-align:center; font-size:8"><span class="ncibi-caption">Gene -<br />Pubmed</span></td>
					<td style="text-align:center; font-size:8"><span class="ncibi-caption">Gene/Mesh -<br />Concept</span></td>
					<td style="text-align:center; font-size:8"><span class="ncibi-caption">Gene/Pathway -<br />Compound</span></td>
					<td style="text-align:center; font-size:8"><span class="ncibi-caption">Gene/Compound -<br />Mesh</span></td>
				</tr>
				<tr>
					<td><img src="${resource(dir:'images/ncibi',file:'pubmed-gene-icon.gif')}" alt="NCIBI Pubmed tools (logo)"/></td>
					<td><img src="${resource(dir:'images/ncibi',file:'concept_icon.gif')}" alt="NCIBI Concept tools (logo)"/></td>
					<td><img src="${resource(dir:'images/ncibi',file:'compound-icon.png')}" alt="NCIBI Compound tools (logo)"/></td>
					<td><img src="${resource(dir:'images/ncibi',file:'mimi_icon.gif')}" alt="NCIBI Gene Interaction tools (logo)"/></td>
				</tr>
			</table>
		</td>
	</tr>
</table>
</div>
</body>