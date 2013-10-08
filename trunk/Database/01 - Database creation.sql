/* Notification Bar */


CREATE DATABASE NotificationBar


/* Create table User( Tabela cu toti userii aplicatiei )*/
CREATE TABLE `User`(
	IDUser					INT				NOT NULL,
	
	UserName				NVARCHAR(200)	NOT NULL,	/* User name */
	Email					NVARCHAR(200)	NOT NULL,	/* Email */
	ScreenName				NVARCHAR(200)	NOT NULL,	/* Screen name */
	Password				NVARCHAR(200)	NOT NULL,	/* Password */
	Status					INT				NOT NULL,	/*
															Starea curenta a user`ului:
															0 - Undefined
															1 - Active
															2 - Inactive
														*/
	UserType				INT				NOT NULL,	/*
															Tip user:
															1 - Admin
															2 - Customer
														*/
	
	PRIMARY KEY (IDUser)
);
GO

/* Create table NotificationTemplate( Template`uri notificari - fiecare notificare va putea avea asignat un anumit template)*/
CREATE TABLE NotificationTemplate(
	IDNotificationTemplate			INT				NOT NULL,	
	TemplateName					NVARCHAR(200)	NOT NULL,	/* Nume template */
	OrderPriority					INT				NULL,		/* Prioritatea de sortare */
																
	PRIMARY KEY (IDNotificationTemplate)
);

/* Create table Notification( Tabela cu toate notificarile din aplicatie )*/
CREATE TABLE Notification(
	IDNotification			INT				NOT NULL,
	Url						NVARCHAR(200)	NOT NULL,	/* Url-ul paginii pe care notificarea va trebui incarcata */
	PublishedAt				DATETIME		NULL,		/* Data publicarii */
	CreationDate			DATETIME		NOT NULL,	/* Data in carea a fost creat */
	LastModificationDate	DATETIME		NOT NULL,	/* Data la carea a fost modificat ultima data */
	
	PRIMARY KEY (IDNotification)
);
GO

/* Create table UserNotificationMapping( Corespondenta dintre user si notificare )*/
CREATE TABLE UserNotificationMapping(
	IDUserNotificationMapping		INT				NOT NULL,
	IDUser							INT				NOT NULL,	/* User-ul */
	IDNotification					INT				NOT NULL,	/* Notificarea */
	
	PRIMARY KEY (IDUserNotificationMapping),
	FOREIGN KEY (IDUser) REFERENCES `User`(IDUser),
	FOREIGN KEY (IDNotification) REFERENCES Notification(IDNotification)
);
GO

/* Create table Setting( Tabela cu setari ) */
CREATE TABLE Setting(
	IDSetting			INT				NOT NULL,
	Name				NVARCHAR(200)	NOT NULL,	/* Nume setare */
	`Type`				INT				NOT NULL,	/*
														Tip setare:
														0 - Undefined
														1 - Size
														2 - Functionality
														3 - Background
														4 - TextStyle
														5 - etc
													*/

	PRIMARY KEY (IDSetting)
);
GO

/* Create table SettingAttribute( Lista cu atributele unei setari ) */
CREATE TABLE SettingAttribute(
	IDSettingAttribute		INT				NOT NULL,
	IDSetting				INT				NOT NULL,
	AttributeName			NVARCHAR(200)	NOT NULL,
	AttributeType			INT				NOT NULL,
														/*
															Tip atribute:
															0 - Undefined,
															1 - Input
															2 - Dropdown
															3 - color picker
														*/
	DefaultValue			NVARCHAR(200)	NOT NULL,	/* Valoare default a atributului - posibil ca aceasta valoare s`o retinem direct in .js */
	
	PRIMARY KEY (IDSettingAttribute),
	FOREIGN KEY (IDSetting) REFERENCES Setting(IDSetting)
);
GO

/* Create table SettingAttributeValue( Posibile valori pentru un anume atribut - mai mult pentru atributele de tip dropdown ) */
CREATE TABLE SettingAttributeValue(
	IDSettingAttributeValue			INT				NOT NULL,
	IDSettingAttribute				INT				NOT NULL,	/* Atributul setarii */
	`Value`							NVARCHAR(200)	NOT NULL,	/* Valoare atribut */
	
	PRIMARY KEY (IDSettingAttributeValue),
	FOREIGN KEY (IDSettingAttribute) REFERENCES SettingAttribute(IDSettingAttribute)
);
GO

/* Create table NotificationTemplateAttribute( Atributele unui template ) */
CREATE TABLE NotificationTemplateAttribute(
	IDNotificationTemplateAttribute		INT				NOT NULL,
	IDNotificationTemplate				INT				NOT NULL,	/*  */
	IDSettingAttribute					INT				NOT NULL,	/* Atributul setarii */
	IDSettingAttributeValue				INT				NOT NULL,	/* Valoarea atributului setarii */
	
	PRIMARY KEY (IDNotificationTemplateAttribute),
	FOREIGN KEY (IDNotificationTemplate) REFERENCES NotificationTemplate(IDNotificationTemplate),
	FOREIGN KEY (IDSettingAttribute) REFERENCES SettingAttribute(IDSettingAttribute),
	FOREIGN KEY (IDSettingAttributeValue) REFERENCES SettingAttributeValue(IDSettingAttributeValue)
);
GO






































































