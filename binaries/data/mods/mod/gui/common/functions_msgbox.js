async function messageBox(mbWidth, mbHeight, mbMessage, mbTitle, mbButtonCaptions, mbBtnCode,
	mbCallbackArgs)
{
	const btnCode = await Engine.PushGuiPage(
		"page_msgbox.xml",
		{
			"width": mbWidth,
			"height": mbHeight,
			"message": mbMessage,
			"title": mbTitle,
			"buttonCaptions": mbButtonCaptions
		});

	if (mbBtnCode !== undefined && mbBtnCode[btnCode])
		mbBtnCode[btnCode](mbCallbackArgs ? mbCallbackArgs[btnCode] : undefined);
}

async function timedConfirmation(width, height, message, timeParameter, timeout, title, buttonCaptions,
	btnCode, callbackArgs)
{
	const button = await Engine.PushGuiPage(
		"page_timedconfirmation.xml",
		{
			"width": width,
			"height": height,
			"message": message,
			"timeParameter": timeParameter,
			"timeout": timeout,
			"title": title,
			"buttonCaptions": buttonCaptions
		});

	if (btnCode !== undefined && btnCode[button])
		btnCode[button](callbackArgs ? callbackArgs[button] : undefined);
}

function openURL(url)
{
	Engine.OpenURL(url);

	messageBox(
		600, 200,
		sprintf(
			translate("Opening %(url)s\n in default web browser. Please wait…"),
			{ "url": url }
		),
		translate("Opening page"));
}
