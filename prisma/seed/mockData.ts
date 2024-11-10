import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('718869ed-38a2-46fb-ac3d-9b97d59a56a0', '1Everardo.Abernathy66@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a801afae-bd87-49c8-b7dd-6da985aa50fd', '9Jessy_Toy@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=11', 'stu901vwx234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('ea163e5d-8042-49f0-a576-45d250b2be38', '17Daniela_Deckow99@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=19', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('d6522afb-39b9-4839-a844-f8a41ea866f4', '33Zander19@hotmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=35', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('eac85669-0a7f-4043-ad4e-f742a161c0bd', '41Brooks_Rolfson93@hotmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=43', 'stu901vwx234', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('7317fce6-01c2-4859-9732-f88aad2c883d', '49Candace.Flatley4@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=51', 'ghi789jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('8de073b4-4cb5-4603-9151-2383a69a5466', '57Adrain_Kris@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'abc123def456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('98eb0c61-d6b9-459d-a069-493605a50b61', '65Jules.Bechtelar@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=67', 'ghi789jkl012', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('1b22c30b-e6c2-4630-9708-fa2a9629ed01', '73Eriberto30@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=75', 'yz567abc890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('87915b16-18cf-4e0a-9e74-fdeeb6199a1c', 'Job Update Notifications', '98eb0c61-d6b9-459d-a069-493605a50b61');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('a18f8b23-0d49-45fa-ada1-210dc714739b', 'Job Update Notifications', '718869ed-38a2-46fb-ac3d-9b97d59a56a0');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('8c5d7478-7f7d-4654-bc42-3cc2a4dbda63', 'Customer Feedback Requests', '718869ed-38a2-46fb-ac3d-9b97d59a56a0');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('0dba0ef5-5072-48d1-bd9a-477bfc9e65ea', 'Monthly Performance Reports', '1b22c30b-e6c2-4630-9708-fa2a9629ed01');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('fb13881c-c224-4339-8eee-87b34b4636fe', 'Weekly Newsletter Subscription', 'd6522afb-39b9-4839-a844-f8a41ea866f4');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('ddb65dc7-fe72-41ab-90ce-91d7bb5d7c38', 'Monthly Performance Reports', '7317fce6-01c2-4859-9732-f88aad2c883d');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('49454859-6ea0-4f96-83f3-9c45645e8116', 'Customer Feedback Requests', '98eb0c61-d6b9-459d-a069-493605a50b61');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('4a385c6d-ef83-4560-b6e9-a2a8c15e604e', 'Monthly Performance Reports', 'ea163e5d-8042-49f0-a576-45d250b2be38');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('0e7659c6-b4b2-4e9c-b5ae-cfff42034a15', 'Customer Feedback Requests', 'eac85669-0a7f-4043-ad4e-f742a161c0bd');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('eb1828b2-8da2-447a-90b5-ebf3c9de8c95', 'Job Update Notifications', 'ea163e5d-8042-49f0-a576-45d250b2be38');

INSERT INTO "Supplier" ("id", "name", "email", "phone", "address") VALUES ('46c4cf9e-fa2e-467b-8008-b26cf411bb24', 'Fabric World', '102Andreanne37@yahoo.com', '15550456', '104 18 Spring St, New York, NY 10012');
INSERT INTO "Supplier" ("id", "name", "email", "phone", "address") VALUES ('d720b62c-75c0-4c35-a309-edea7733c94a', 'Window Dressings Ltd.', '107Oliver_Murray@gmail.com', '15551011', '109 18 W 29th St, New York, NY 10001');
INSERT INTO "Supplier" ("id", "name", "email", "phone", "address") VALUES ('b1df83d2-b9e9-4bb9-a761-74c840a313a3', 'Curtain Supplies Co.', '112Reanna_Blick@hotmail.com', '15550123', '114 18 W 29th St, New York, NY 10001');
INSERT INTO "Supplier" ("id", "name", "email", "phone", "address") VALUES ('0f7eb7fa-6298-4e47-a9ff-cd95a45df4bf', 'Window Dressings Ltd.', '117Paolo_Murphy@yahoo.com', '15550123', '119 136 E 13th St, New York, NY 10003');
INSERT INTO "Supplier" ("id", "name", "email", "phone", "address") VALUES ('38501b08-81ea-4407-bdee-ce61777435c9', 'Fabric World', '122Tiana31@yahoo.com', '15550789', '124 443 E 6th St, New York, NY 10009');
INSERT INTO "Supplier" ("id", "name", "email", "phone", "address") VALUES ('6a653eaa-9576-4bd0-b3ad-4e368e73eca1', 'Curtain Supplies Co.', '127Stephanie.Klein@yahoo.com', '15551213', '129 136 E 13th St, New York, NY 10003');
INSERT INTO "Supplier" ("id", "name", "email", "phone", "address") VALUES ('902af358-d3a8-44da-b412-b3eb99e053e9', 'Fabric World', '132Erna_Kshlerin74@hotmail.com', '15551011', '134 18 W 29th St, New York, NY 10001');
INSERT INTO "Supplier" ("id", "name", "email", "phone", "address") VALUES ('d481529c-b409-4096-90a1-89e69f30700c', 'Curtain Supplies Co.', '137Casimer.Barton-Howell@yahoo.com', '15551213', '139 136 E 13th St, New York, NY 10003');
INSERT INTO "Supplier" ("id", "name", "email", "phone", "address") VALUES ('983aaecc-8545-4cc3-adcf-734e25d75527', 'Blinds  More', '142Bruce.Mitchell25@hotmail.com', '15550123', '144 18 Spring St, New York, NY 10012');
INSERT INTO "Supplier" ("id", "name", "email", "phone", "address") VALUES ('a961cfb5-2654-4da9-988e-34c22ab59d39', 'Fabric World', '147Freida_Dibbert@hotmail.com', '15551213', '149 136 E 13th St, New York, NY 10003');

INSERT INTO "Material" ("id", "name", "description", "specifications", "criticalFlag", "supplierId") VALUES ('294f61f1-8adb-4f6d-8532-a28793c88ac0', 'Linen Weave', 'Durable polyester blend with a smooth finish.', 'Width 60 inches Weight 180 GSM', false, 'd481529c-b409-4096-90a1-89e69f30700c');
INSERT INTO "Material" ("id", "name", "description", "specifications", "criticalFlag", "supplierId") VALUES ('0027e707-3023-4a30-ba7d-444648390960', 'Linen Weave', 'Durable polyester blend with a smooth finish.', 'Width 52 inches Weight 250 GSM', true, '902af358-d3a8-44da-b412-b3eb99e053e9');
INSERT INTO "Material" ("id", "name", "description", "specifications", "criticalFlag", "supplierId") VALUES ('505f9ee5-c239-4f23-864f-95d5c8e35c9e', 'Polyester Blend', 'Highquality cotton fabric suitable for various curtain styles.', 'Width 54 inches Weight 200 GSM', false, '0f7eb7fa-6298-4e47-a9ff-cd95a45df4bf');
INSERT INTO "Material" ("id", "name", "description", "specifications", "criticalFlag", "supplierId") VALUES ('63dfbfa9-2c0e-4179-8186-02626d2b1162', 'Velvet Plush', 'Natural linen weave providing a rustic look.', 'Width 54 inches Weight 200 GSM', false, 'd481529c-b409-4096-90a1-89e69f30700c');
INSERT INTO "Material" ("id", "name", "description", "specifications", "criticalFlag", "supplierId") VALUES ('34d6220c-2d0f-490b-a17d-a0a737e9ee7c', 'Silk Sheer', 'Highquality cotton fabric suitable for various curtain styles.', 'Width 60 inches Weight 180 GSM', true, 'd481529c-b409-4096-90a1-89e69f30700c');
INSERT INTO "Material" ("id", "name", "description", "specifications", "criticalFlag", "supplierId") VALUES ('6b65fbea-71ea-4000-a46d-74fe9e081205', 'Cotton Fabric', 'Highquality cotton fabric suitable for various curtain styles.', 'Width 60 inches Weight 180 GSM', true, '983aaecc-8545-4cc3-adcf-734e25d75527');
INSERT INTO "Material" ("id", "name", "description", "specifications", "criticalFlag", "supplierId") VALUES ('c78b9ef4-c833-465c-a569-40496654b23c', 'Cotton Fabric', 'Natural linen weave providing a rustic look.', 'Width 54 inches Weight 200 GSM', false, 'a961cfb5-2654-4da9-988e-34c22ab59d39');
INSERT INTO "Material" ("id", "name", "description", "specifications", "criticalFlag", "supplierId") VALUES ('6e48b2d0-7acd-40f8-836d-87156ca21c97', 'Velvet Plush', 'Soft velvet plush offering a rich texture.', 'Width 48 inches Weight 150 GSM', false, 'd481529c-b409-4096-90a1-89e69f30700c');
INSERT INTO "Material" ("id", "name", "description", "specifications", "criticalFlag", "supplierId") VALUES ('5ca2a4f6-4419-491a-adb6-b0a34290b651', 'Velvet Plush', 'Soft velvet plush offering a rich texture.', 'Width 52 inches Weight 250 GSM', false, 'd720b62c-75c0-4c35-a309-edea7733c94a');
INSERT INTO "Material" ("id", "name", "description", "specifications", "criticalFlag", "supplierId") VALUES ('b3b9f398-8054-44f5-98b6-adcf2dbb31c5', 'Cotton Fabric', 'Durable polyester blend with a smooth finish.', 'Width 54 inches Weight 200 GSM', false, 'a961cfb5-2654-4da9-988e-34c22ab59d39');

INSERT INTO "Customer" ("id", "name", "email", "phone", "address", "notes") VALUES ('7f1d8177-7b18-4331-9c53-6dab04f7818e', 'Emily Davis', '202Ruby_Farrell@hotmail.com', '1123456789', '204 18 W 29th St, New York, NY 10001', 'Preferred contact method email');
INSERT INTO "Customer" ("id", "name", "email", "phone", "address", "notes") VALUES ('705b381e-8458-4010-8607-6a55796fe26f', 'William Brown', '208Anna_Stokes@yahoo.com', '1123456789', '210 91 Christopher St, New York, NY 10014', 'Preferred contact method email');
INSERT INTO "Customer" ("id", "name", "email", "phone", "address", "notes") VALUES ('70142181-125a-4057-b8ac-4c8e0fb41395', 'Jane Smith', '214Wilma.Ebert@hotmail.com', '1987654321', '216 330 W Broadway, New York, NY 10013', 'Allergy to certain fabrics');
INSERT INTO "Customer" ("id", "name", "email", "phone", "address", "notes") VALUES ('ff757602-f2df-4dce-9491-86a6a7750790', 'Michael Johnson', '220Keon_Hauck@hotmail.com', '1123456789', '222 443 E 6th St, New York, NY 10009', 'Allergy to certain fabrics');
INSERT INTO "Customer" ("id", "name", "email", "phone", "address", "notes") VALUES ('5508aa2b-f11a-4acf-b3fa-bf60d5586940', 'John Doe', '226Remington13@yahoo.com', '1098765432', '228 91 Christopher St, New York, NY 10014', 'Requires weekend appointments');
INSERT INTO "Customer" ("id", "name", "email", "phone", "address", "notes") VALUES ('0d57415b-a4e7-4188-9b5d-dd40a96d5e38', 'Emily Davis', '232Ramiro.Schulist@yahoo.com', '1987654321', '234 330 W Broadway, New York, NY 10013', 'Frequent buyer');
INSERT INTO "Customer" ("id", "name", "email", "phone", "address", "notes") VALUES ('a74cdd51-a884-4637-949c-9059d5d02f0f', 'Emily Davis', '238Asha_OConnell16@hotmail.com', '1098765432', '240 18 W 29th St, New York, NY 10001', 'Requires weekend appointments');
INSERT INTO "Customer" ("id", "name", "email", "phone", "address", "notes") VALUES ('29d38dd4-5b19-42c6-a7c2-eb6eddedb2f0', 'Emily Davis', '244Dan81@yahoo.com', '1987654321', '246 18 W 29th St, New York, NY 10001', 'Allergy to certain fabrics');
INSERT INTO "Customer" ("id", "name", "email", "phone", "address", "notes") VALUES ('a960cae5-00c8-4ea7-bc08-65f21b9d407f', 'John Doe', '250Louisa.Wilderman66@gmail.com', '1098765432', '252 91 Christopher St, New York, NY 10014', 'Frequent buyer');
INSERT INTO "Customer" ("id", "name", "email", "phone", "address", "notes") VALUES ('ca516bbe-d2cb-4eaf-9383-9bb216f91a35', 'John Doe', '256Brisa53@gmail.com', '1098765432', '258 443 E 6th St, New York, NY 10009', 'Requires weekend appointments');

INSERT INTO "Team" ("id", "name", "description") VALUES ('ceba586a-a1f9-41a9-9c60-1f2d6d95e02b', 'Blind Fitters', 'Focuses on fabric selection and quality control');
INSERT INTO "Team" ("id", "name", "description") VALUES ('abf5fe11-b96f-4ead-9d22-4ae63d886ec4', 'Fabric Experts', 'Specializes in fitting and adjusting blinds');
INSERT INTO "Team" ("id", "name", "description") VALUES ('138ca6ae-3dfd-4d7e-9cc8-c8f16fef18ce', 'Curtain Installers', 'Handles all curtain installations and adjustments');
INSERT INTO "Team" ("id", "name", "description") VALUES ('55dded06-e31e-4105-9dcd-0b986cfd044e', 'Measurement Team', 'Experts in track installations and maintenance');
INSERT INTO "Team" ("id", "name", "description") VALUES ('75d42f42-1b55-407d-b89d-b2c0d8268eef', 'Curtain Installers', 'Responsible for precise measurements and assessments');
INSERT INTO "Team" ("id", "name", "description") VALUES ('bb664bc7-6040-4d2e-a089-3728f103afd2', 'Fabric Experts', 'Focuses on fabric selection and quality control');
INSERT INTO "Team" ("id", "name", "description") VALUES ('7f8b4323-fa09-4be9-b162-8a6160003678', 'Blind Fitters', 'Experts in track installations and maintenance');
INSERT INTO "Team" ("id", "name", "description") VALUES ('5b5c753c-ed8f-47eb-abb2-dd095acd8157', 'Curtain Installers', 'Handles all curtain installations and adjustments');
INSERT INTO "Team" ("id", "name", "description") VALUES ('ae16bef6-eae3-41f0-acef-9b4b6020057c', 'Measurement Team', 'Handles all curtain installations and adjustments');
INSERT INTO "Team" ("id", "name", "description") VALUES ('b9871890-8ae9-455e-9b15-342ea0e9382c', 'Blind Fitters', 'Responsible for precise measurements and assessments');

INSERT INTO "TeamMember" ("id", "role", "skills", "userId", "teamId") VALUES ('d17c4afa-8590-412e-a60e-0e574f1ddc11', 'Sales Representative', 'Scheduling', 'eac85669-0a7f-4043-ad4e-f742a161c0bd', '7f8b4323-fa09-4be9-b162-8a6160003678');
INSERT INTO "TeamMember" ("id", "role", "skills", "userId", "teamId") VALUES ('d069743b-995a-4301-80eb-1ea06a1f9bcd', 'Sales Representative', 'Team Leadership', '8de073b4-4cb5-4603-9151-2383a69a5466', 'bb664bc7-6040-4d2e-a089-3728f103afd2');
INSERT INTO "TeamMember" ("id", "role", "skills", "userId", "teamId") VALUES ('b89355dc-5946-4796-ba37-e46944e2b215', 'Production Manager', 'Team Leadership', 'd6522afb-39b9-4839-a844-f8a41ea866f4', '138ca6ae-3dfd-4d7e-9cc8-c8f16fef18ce');
INSERT INTO "TeamMember" ("id", "role", "skills", "userId", "teamId") VALUES ('5e44681e-9457-488c-884a-0a69190f6304', 'Sales Representative', 'Scheduling', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5b5c753c-ed8f-47eb-abb2-dd095acd8157');
INSERT INTO "TeamMember" ("id", "role", "skills", "userId", "teamId") VALUES ('3eb21ffe-b1e3-4e12-ae26-27c34580d11b', 'Sales Representative', 'Team Leadership', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ae16bef6-eae3-41f0-acef-9b4b6020057c');
INSERT INTO "TeamMember" ("id", "role", "skills", "userId", "teamId") VALUES ('27dec51a-8b16-4851-af27-43f9b85c015d', 'Customer Support', 'Customer Relationship Management', '8de073b4-4cb5-4603-9151-2383a69a5466', 'b9871890-8ae9-455e-9b15-342ea0e9382c');
INSERT INTO "TeamMember" ("id", "role", "skills", "userId", "teamId") VALUES ('391b48d6-3a12-4b6f-ba83-d306b92fd9d5', 'Sales Representative', 'Fabric Cutting', '98eb0c61-d6b9-459d-a069-493605a50b61', 'ceba586a-a1f9-41a9-9c60-1f2d6d95e02b');
INSERT INTO "TeamMember" ("id", "role", "skills", "userId", "teamId") VALUES ('65fa4a78-feac-4d64-8c00-bf13f0e1463e', 'Sales Representative', 'Inventory Management', '7317fce6-01c2-4859-9732-f88aad2c883d', '138ca6ae-3dfd-4d7e-9cc8-c8f16fef18ce');
INSERT INTO "TeamMember" ("id", "role", "skills", "userId", "teamId") VALUES ('2b1088ae-731d-403c-ac0a-fc55b3ffec2e', 'Customer Support', 'Inventory Management', 'd6522afb-39b9-4839-a844-f8a41ea866f4', '5b5c753c-ed8f-47eb-abb2-dd095acd8157');
INSERT INTO "TeamMember" ("id", "role", "skills", "userId", "teamId") VALUES ('2c8b9091-3678-4719-9fc8-9e2ff48cf00c', 'Installer', 'Fabric Cutting', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'abf5fe11-b96f-4ead-9d22-4ae63d886ec4');

INSERT INTO "Job" ("id", "title", "description", "status", "priority", "startDate", "endDate", "customerId") VALUES ('8ad80e41-f0ca-4750-9e67-058d8c7c748b', 'Track System Setup for Conference Hall', 'Fitting roller blinds with remote control functionality.', 'On Hold', 'Medium', '2024-05-20T21:13:30.908Z', '2024-04-17T00:41:08.871Z', '70142181-125a-4057-b8ac-4c8e0fb41395');
INSERT INTO "Job" ("id", "title", "description", "status", "priority", "startDate", "endDate", "customerId") VALUES ('0f3a4292-9985-4c1d-908a-42c0c223dabb', 'Curtain Installation for Living Room', 'Installing new curtains with blackout lining.', 'Completed', 'Low', '2023-12-11T04:17:43.403Z', '2025-05-26T21:44:53.904Z', '5508aa2b-f11a-4acf-b3fa-bf60d5586940');
INSERT INTO "Job" ("id", "title", "description", "status", "priority", "startDate", "endDate", "customerId") VALUES ('5a352b39-a5e9-4de7-aea8-313775910027', 'Roller Blinds Fitting for Kitchen', 'Designing custom drapery with silk fabric.', 'Completed', 'Medium', '2025-08-05T03:06:15.344Z', '2024-03-01T03:26:56.578Z', '0d57415b-a4e7-4188-9b5d-dd40a96d5e38');
INSERT INTO "Job" ("id", "title", "description", "status", "priority", "startDate", "endDate", "customerId") VALUES ('72c93f7f-6840-4930-98d0-a7716dbf2db9', 'Roller Blinds Fitting for Kitchen', 'Designing custom drapery with silk fabric.', 'Cancelled', 'Urgent', '2024-08-07T14:59:24.159Z', '2025-08-20T15:10:04.577Z', '705b381e-8458-4010-8607-6a55796fe26f');
INSERT INTO "Job" ("id", "title", "description", "status", "priority", "startDate", "endDate", "customerId") VALUES ('cb8ab26f-9ade-4662-96bf-6e1c7c99d0da', 'Custom Drapery Design for Bedroom', 'Installing new curtains with blackout lining.', 'Cancelled', 'Urgent', '2024-02-18T18:39:07.957Z', '2024-12-14T22:24:34.807Z', '7f1d8177-7b18-4331-9c53-6dab04f7818e');
INSERT INTO "Job" ("id", "title", "description", "status", "priority", "startDate", "endDate", "customerId") VALUES ('0858c789-bda1-43c3-914c-0b71bbe41e5e', 'Blinds Replacement in Office', 'Designing custom drapery with silk fabric.', 'Pending', 'High', '2024-01-07T00:45:52.518Z', '2025-09-11T10:36:19.659Z', '29d38dd4-5b19-42c6-a7c2-eb6eddedb2f0');
INSERT INTO "Job" ("id", "title", "description", "status", "priority", "startDate", "endDate", "customerId") VALUES ('d7803cbd-959a-4645-91ec-635f88d6bbcb', 'Curtain Installation for Living Room', 'Fitting roller blinds with remote control functionality.', 'Pending', 'Normal', '2023-12-17T06:42:18.754Z', '2025-03-16T21:34:45.794Z', '29d38dd4-5b19-42c6-a7c2-eb6eddedb2f0');
INSERT INTO "Job" ("id", "title", "description", "status", "priority", "startDate", "endDate", "customerId") VALUES ('b3088aed-c879-4f5c-ae43-9c18c023c5cd', 'Blinds Replacement in Office', 'Installing new curtains with blackout lining.', 'On Hold', 'Low', '2024-06-25T18:14:30.945Z', '2025-10-10T20:55:22.558Z', '70142181-125a-4057-b8ac-4c8e0fb41395');
INSERT INTO "Job" ("id", "title", "description", "status", "priority", "startDate", "endDate", "customerId") VALUES ('61302756-bbcd-4515-8247-0835fce2faf7', 'Track System Setup for Conference Hall', 'Designing custom drapery with silk fabric.', 'Pending', 'High', '2025-05-05T16:06:43.550Z', '2024-01-14T03:13:46.942Z', '0d57415b-a4e7-4188-9b5d-dd40a96d5e38');
INSERT INTO "Job" ("id", "title", "description", "status", "priority", "startDate", "endDate", "customerId") VALUES ('882aaaa4-5a1b-4c9b-a5b3-46bd8fc3ce5c', 'Blinds Replacement in Office', 'Fitting roller blinds with remote control functionality.', 'Completed', 'Medium', '2024-02-26T03:06:18.323Z', '2025-05-19T10:00:20.921Z', 'a74cdd51-a884-4637-949c-9059d5d02f0f');

INSERT INTO "JobTeam" ("jobId", "teamId", "id") VALUES ('882aaaa4-5a1b-4c9b-a5b3-46bd8fc3ce5c', 'b9871890-8ae9-455e-9b15-342ea0e9382c', 'aa0ebdf4-32b5-447b-a8f5-a2f40ed6cab7');
INSERT INTO "JobTeam" ("jobId", "teamId", "id") VALUES ('61302756-bbcd-4515-8247-0835fce2faf7', '75d42f42-1b55-407d-b89d-b2c0d8268eef', 'c0c07bdb-79de-4066-bfba-63921cc96f56');
INSERT INTO "JobTeam" ("jobId", "teamId", "id") VALUES ('882aaaa4-5a1b-4c9b-a5b3-46bd8fc3ce5c', 'ceba586a-a1f9-41a9-9c60-1f2d6d95e02b', '696c4f93-38bc-4278-a985-cad3be982983');
INSERT INTO "JobTeam" ("jobId", "teamId", "id") VALUES ('72c93f7f-6840-4930-98d0-a7716dbf2db9', 'ceba586a-a1f9-41a9-9c60-1f2d6d95e02b', '8144e6c4-3867-4e1e-808b-6474f17bf727');
INSERT INTO "JobTeam" ("jobId", "teamId", "id") VALUES ('cb8ab26f-9ade-4662-96bf-6e1c7c99d0da', 'bb664bc7-6040-4d2e-a089-3728f103afd2', 'ce487795-f971-447f-9a46-540226deb1e1');
INSERT INTO "JobTeam" ("jobId", "teamId", "id") VALUES ('8ad80e41-f0ca-4750-9e67-058d8c7c748b', 'ae16bef6-eae3-41f0-acef-9b4b6020057c', '2d55d6ca-c8e7-4b20-9093-c135de17d461');
INSERT INTO "JobTeam" ("jobId", "teamId", "id") VALUES ('d7803cbd-959a-4645-91ec-635f88d6bbcb', 'ae16bef6-eae3-41f0-acef-9b4b6020057c', '0ce64836-66ef-4f82-bdcf-e86bd606181c');
INSERT INTO "JobTeam" ("jobId", "teamId", "id") VALUES ('0f3a4292-9985-4c1d-908a-42c0c223dabb', 'b9871890-8ae9-455e-9b15-342ea0e9382c', '8fcef83b-a579-4d8f-a018-e100e83158f2');
INSERT INTO "JobTeam" ("jobId", "teamId", "id") VALUES ('61302756-bbcd-4515-8247-0835fce2faf7', 'bb664bc7-6040-4d2e-a089-3728f103afd2', '5e54dfda-bc16-44a2-a837-42008d43fb98');
INSERT INTO "JobTeam" ("jobId", "teamId", "id") VALUES ('61302756-bbcd-4515-8247-0835fce2faf7', 'bb664bc7-6040-4d2e-a089-3728f103afd2', '68dd6994-b471-48ad-be5a-742eb905af24');

INSERT INTO "JobSheet" ("id", "type", "measurements", "details", "imageUrl", "jobId") VALUES ('e662ac5f-5ee5-450f-9ba5-cc60c6c8bd79', 'Roller Blind Worksheet', 'Width 140cm Height 240cm', 'Thermal lining Material Wool', 'https://i.imgur.com/YfJQV5z.png?id=404', 'd7803cbd-959a-4645-91ec-635f88d6bbcb');
INSERT INTO "JobSheet" ("id", "type", "measurements", "details", "imageUrl", "jobId") VALUES ('f042a581-dea3-4441-b0f6-4ef63dd364a8', 'Roller Blind Worksheet', 'Width 130cm Height 220cm', 'Custom color Beige Material Polyester', 'https://i.imgur.com/YfJQV5z.png?id=409', '0f3a4292-9985-4c1d-908a-42c0c223dabb');
INSERT INTO "JobSheet" ("id", "type", "measurements", "details", "imageUrl", "jobId") VALUES ('547fff62-fa95-494e-8233-9052ccbab1c1', 'Roller Blind Worksheet', 'Width 120cm Height 200cm', 'Sheer fabric Material Linen', 'https://i.imgur.com/YfJQV5z.png?id=414', 'cb8ab26f-9ade-4662-96bf-6e1c7c99d0da');
INSERT INTO "JobSheet" ("id", "type", "measurements", "details", "imageUrl", "jobId") VALUES ('af27e801-7d3e-4e23-b611-72610ca1579e', 'Vertical Blind Worksheet', 'Width 130cm Height 220cm', 'Custom color Beige Material Polyester', 'https://i.imgur.com/YfJQV5z.png?id=419', 'b3088aed-c879-4f5c-ae43-9c18c023c5cd');
INSERT INTO "JobSheet" ("id", "type", "measurements", "details", "imageUrl", "jobId") VALUES ('08428701-c639-4095-9cea-6cfdbe2bb874', 'Track Worksheet', 'Width 120cm Height 200cm', 'Thermal lining Material Wool', 'https://i.imgur.com/YfJQV5z.png?id=424', '0f3a4292-9985-4c1d-908a-42c0c223dabb');
INSERT INTO "JobSheet" ("id", "type", "measurements", "details", "imageUrl", "jobId") VALUES ('94f33fe0-4719-46ea-a8e4-569347133c6f', 'Roman Blind Worksheet', 'Width 150cm Height 250cm', 'Blackout fabric Material PVC', 'https://i.imgur.com/YfJQV5z.png?id=429', '0f3a4292-9985-4c1d-908a-42c0c223dabb');
INSERT INTO "JobSheet" ("id", "type", "measurements", "details", "imageUrl", "jobId") VALUES ('4ad1a8d9-ab71-42ec-96e2-78dda449b9d1', 'Vertical Blind Worksheet', 'Width 120cm Height 200cm', 'Sheer fabric Material Linen', 'https://i.imgur.com/YfJQV5z.png?id=434', '0858c789-bda1-43c3-914c-0b71bbe41e5e');
INSERT INTO "JobSheet" ("id", "type", "measurements", "details", "imageUrl", "jobId") VALUES ('7111b3f8-ffbe-4013-930f-4230d2a3da4c', 'Vertical Blind Worksheet', 'Width 100cm Height 180cm', 'Sheer fabric Material Linen', 'https://i.imgur.com/YfJQV5z.png?id=439', 'cb8ab26f-9ade-4662-96bf-6e1c7c99d0da');
INSERT INTO "JobSheet" ("id", "type", "measurements", "details", "imageUrl", "jobId") VALUES ('7d0e20f7-9536-49d8-88a2-63528e6ade56', 'Roller Blind Worksheet', 'Width 140cm Height 240cm', 'Custom color Beige Material Polyester', 'https://i.imgur.com/YfJQV5z.png?id=444', '61302756-bbcd-4515-8247-0835fce2faf7');
INSERT INTO "JobSheet" ("id", "type", "measurements", "details", "imageUrl", "jobId") VALUES ('b4827d4a-0104-45b5-9540-aae8d370046a', 'Panel Glide Worksheet', 'Width 100cm Height 180cm', 'Blackout fabric Material PVC', 'https://i.imgur.com/YfJQV5z.png?id=449', '0f3a4292-9985-4c1d-908a-42c0c223dabb');

INSERT INTO "MaterialOrder" ("id", "quantity", "status", "deliveryDate", "jobId", "materialId") VALUES ('a3491a86-009d-496a-9ace-9633b79618ce', 526, 'Backordered', '2025-04-28T21:23:34.050Z', '0f3a4292-9985-4c1d-908a-42c0c223dabb', '5ca2a4f6-4419-491a-adb6-b0a34290b651');
INSERT INTO "MaterialOrder" ("id", "quantity", "status", "deliveryDate", "jobId", "materialId") VALUES ('7f8c56f3-b8cb-4f84-8f24-de96202e2738', 615, 'Delivered', '2023-12-27T19:02:16.371Z', 'd7803cbd-959a-4645-91ec-635f88d6bbcb', 'c78b9ef4-c833-465c-a569-40496654b23c');
INSERT INTO "MaterialOrder" ("id", "quantity", "status", "deliveryDate", "jobId", "materialId") VALUES ('2cf7e933-2fb7-4be0-8702-9fd9898c86fb', 239, 'Shipped', '2025-05-16T05:56:45.297Z', 'b3088aed-c879-4f5c-ae43-9c18c023c5cd', '63dfbfa9-2c0e-4179-8186-02626d2b1162');
INSERT INTO "MaterialOrder" ("id", "quantity", "status", "deliveryDate", "jobId", "materialId") VALUES ('95e0fc76-1df2-42b4-9516-a775c640a7c0', 386, 'Shipped', '2025-01-14T18:47:07.159Z', '882aaaa4-5a1b-4c9b-a5b3-46bd8fc3ce5c', '294f61f1-8adb-4f6d-8532-a28793c88ac0');
INSERT INTO "MaterialOrder" ("id", "quantity", "status", "deliveryDate", "jobId", "materialId") VALUES ('4c6f15b9-bf84-4a2c-97ce-e122811237ca', 611, 'Backordered', '2024-12-01T01:02:16.090Z', 'b3088aed-c879-4f5c-ae43-9c18c023c5cd', '294f61f1-8adb-4f6d-8532-a28793c88ac0');
INSERT INTO "MaterialOrder" ("id", "quantity", "status", "deliveryDate", "jobId", "materialId") VALUES ('8c472f65-0b5b-4bdc-a2f1-f5ba67a66689', 451, 'Backordered', '2025-09-30T23:01:53.248Z', '8ad80e41-f0ca-4750-9e67-058d8c7c748b', '0027e707-3023-4a30-ba7d-444648390960');
INSERT INTO "MaterialOrder" ("id", "quantity", "status", "deliveryDate", "jobId", "materialId") VALUES ('e0ec2d9a-533b-41b4-9c50-cb791574c10b', 514, 'Pending', '2024-04-15T00:11:28.522Z', '0858c789-bda1-43c3-914c-0b71bbe41e5e', '294f61f1-8adb-4f6d-8532-a28793c88ac0');
INSERT INTO "MaterialOrder" ("id", "quantity", "status", "deliveryDate", "jobId", "materialId") VALUES ('115a82ba-4c58-4a6f-9a67-3f875d629c5d', 561, 'Pending', '2024-12-18T17:06:23.505Z', '0f3a4292-9985-4c1d-908a-42c0c223dabb', '5ca2a4f6-4419-491a-adb6-b0a34290b651');
INSERT INTO "MaterialOrder" ("id", "quantity", "status", "deliveryDate", "jobId", "materialId") VALUES ('1ae63e6b-e08f-492d-99ac-27ef1db27671', 63, 'Delivered', '2025-08-30T03:48:08.582Z', '8ad80e41-f0ca-4750-9e67-058d8c7c748b', '505f9ee5-c239-4f23-864f-95d5c8e35c9e');
INSERT INTO "MaterialOrder" ("id", "quantity", "status", "deliveryDate", "jobId", "materialId") VALUES ('d7f53e49-17d7-4a2e-b4e4-94c202712995', 111, 'Delivered', '2024-12-02T20:16:26.519Z', 'cb8ab26f-9ade-4662-96bf-6e1c7c99d0da', '6b65fbea-71ea-4000-a46d-74fe9e081205');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
