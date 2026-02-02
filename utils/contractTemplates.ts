
import { ContractType } from '../types';

const cddRemplacementPartielTermePrecisTemplate = `
Entre l’association « {{associationName}} » dont le siège social est situé {{associationAddress}}.
Représentée par {{issuerFullName}} agissant en qualité de {{issuerQuality}},

Et 

{{employeeCivility}} {{employeeFullName}} née le {{employeeDob}} immatriculé à la Sécurité Sociale sous le numéro {{employeeSocialSecurity}} et demeurant {{employeeAddress}}.

Il a été convenu ce qui suit :

 ARTICLE 1 - CONDITIONS D’ENGAGEMENT 

Le contrat de {{employeeCivility}} {{employeeFullName}} est régi par les dispositions de la Convention Collective Nationale des acteurs du lien social et familial : centres sociaux et socioculturels, établissement d’accueil de jeunes enfants, associations de développement social local du 4 juin 1983 qui peut être consultée {{ccnConsultationLocation}} ainsi que par les dispositions du présent contrat dont {{employeeCivility}} {{employeeFullName}} déclare avoir pris connaissance.

{{employeeCivility}} {{employeeFullName}} s’engage à respecter les obligations de loyauté et de discrétion attachées à son contrat de travail et à se conformer aux instructions de la direction concernant les conditions d’exécution du travail.

{{employeeCivility}} {{employeeFullName}} déclare être libre de tout engagement et certifie n’exercer aucune autre activité salariée auprès d’un autre employeur pouvant le conduire à dépasser les durées maximales légales de travail, en application notamment des dispositions des articles L 3121-20 et suivants du code du travail.

{{employeeCivility}} {{employeeFullName}} atteste sur l’honneur ne pas avoir été condamné(e) définitivement pour crime ou à une peine d’au moins deux mois d’emprisonnement sans sursis pour un délit mentionné à l’article L.133-6 du Code de l’Action Sociale et des Familles. 
 
En cas de condamnation entrant dans le champ d’application de l’article L.133-6 du Code de l’Action Sociale et des Familles, compte tenu de son incidence sur l’exercice de son activité professionnelle au sein du centre, {{employeeCivility}} {{employeeFullName}} s’engage à en informer sans délai l’association.

 ARTICLE 2 - OBJET ET DUREE DU CONTRAT 

{{employeeCivility}} {{employeeFullName}} est engagé(e) par l’association « {{associationName}} » pour une durée déterminée de {{duration}}, à compter du {{startDate}} jusqu’au {{endDate}} pour assurer le remplacement provisoire et partiel de {{replacedPersonCivility}} {{replacedPersonFullName}} employé(e) habituellement en qualité de {{replacedPersonJobTitle}} et absent(e) actuellement pour {{replacementReason}}.


 ARTICLE 3 - EMPLOI ET QUALIFICATION 

{{employeeCivility}} {{employeeFullName}} est employé(e) en qualité de {{jobTitle}} avec le statut de {{jobStatus}}
sous la responsabilité de {{responsiblePersonTitle}} conformément à la fiche de poste remise.

Cet emploi est rattaché à l’emploi repère {{jobBenchmark}} dans le système de classification conventionnelle. L’emploi est rattaché à la famille de métiers {{jobFamily}}.

{{employeeCivility}} {{employeeFullName}} s’engage à suivre des formations à la demande de son employeur.

{{employeeCivility}} {{employeeFullName}} s’engage à se soumettre à la visite médicale d’information et de prévention à laquelle il (elle) sera convoqué(e).

 ARTICLE 4 - PERIODE D’ESSAI 

Le présent contrat ne deviendra ferme qu’à l’issue d’une période d’essai de {{trialPeriod}}. Si une suspension du contrat de travail intervient pendant la période d’essai, celle-ci sera automatiquement prolongée d’une durée équivalente à la durée de la suspension. 

Durant la période d’essai, chacune des parties pourra mettre fin au contrat après avoir respecté, le cas échéant un délai de prévenance tel que défini aux articles L 1221-25 et L 1221-26 du code du travail sans indemnités d’aucune sorte. 

Pendant cette période d’essai, {{employeeCivility}} {{employeeFullName}} s’engage en outre à fournir tous les éléments nécessaires pour constituer son dossier, notamment copie des diplômes requis.

 ARTICLE 5 - LIEU DE TRAVAIL 

{{employeeCivility}} {{employeeFullName}} exercera principalement ses fonctions à {{workLocation}}. Ce lieu pourra être modifié en fonction des nécessités de service.

 ARTICLE 6 - DUREE DU TRAVAIL 

{{employeeCivility}} {{employeeFullName}} est embauché(e) à temps partiel.
{{employeeCivility}} {{employeeFullName}} effectuera {{weeklyHours}} heures hebdomadaires.
Cette répartition de la durée de travail indiquée ci-dessus pourra éventuellement être modifiée dans les conditions suivantes : en cas d’absence d’un ou plusieurs salariés, en cas de réorganisation des horaires collectifs…
Une telle modification sera notifiée par écrit à {{employeeCivility}} {{employeeFullName}} 7 jours au moins avant sa date d’effet.

 ARTICLE 7 - HORAIRES DE TRAVAIL 

Les horaires de travail de {{employeeCivility}} {{employeeFullName}} lui seront communiqués par écrit.

 ARTICLE 8 - HEURES COMPLEMENTAIRES 

{{employeeCivility}} {{employeeFullName}} pourra être amené(e) à effectuer des heures complémentaires dans la limite d’un tiers de la durée prévue au contrat, soit {{complementaryHoursLimit}} heures hebdomadaires.
Les heures complémentaires effectuées ne peuvent avoir pour effet de porter la durée hebdomadaire de travail à un niveau égal ou supérieur à celui de la durée légale ou conventionnelle de travail.

 ARTICLE 9 - REMUNERATION

{{employeeCivility}} {{employeeFullName}} perçoit une rémunération annuelle brute établie de la manière suivante :

-	Une rémunération de base pour un temps plein composée :
o	D’un salaire socle conventionnel qui s’élève, à ce jour, à {{salaireSocle}} euros annuels bruts. 
o	Auquel s’ajoute un salaire additionnel égal au produit du total des {{peseePoints}} points de pesée de {{employeeCivility}} {{employeeFullName}}, par la valeur du point fixée par la convention collective nationale, et qui est de {{valeurPoint}} euros, à ce jour. 
Soit un montant annuel brut, pour un temps plein de {{montantAnnuelBrutTempsPlein}} €.

{{employeeCivility}} {{employeeFullName}} étant à temps partiel à raison de {{weeklyHours}} heures par semaine, sa rémunération brute sera proratisée à hauteur de son temps de travail. {{employeeCivility}} {{employeeFullName}} percevra ainsi un montant annuel brut de {{montantAnnuelBrutFinal}} € versé par douzième.

-	A cette rémunération de base s’ajoute une rémunération liée à l’expérience professionnelle :
o	La valorisation de l’ancienneté acquise au sein de la branche professionnelle Alisfa, égale au produit du (des) point(s) acquis à ce titre par {{employeeCivility}} {{employeeFullName}}, par la valeur du point fixée par la convention collective nationale, et qui est de {{valeurPoint}} euros, à ce jour. 
o	{{employeeCivility}} {{employeeFullName}}, bénéficiera de point tous les ans, à sa date anniversaire d’embauche. L’acquisition du point sera proratisée en fonction de son temps de travail contractuel, apprécié chaque mois anniversaire, conformément à l’article 1.2.1 du chapitre V.
o	{{employeeCivility}} {{employeeFullName}}, bénéficiera, conformément aux dispositions prévues à l’article 1.2.2 du chapitre V de la convention collective Alisfa, de points au titre de la valorisation de l’acquisition de compétences au sein de son emploi repère.

Le poste de {{employeeCivility}} {{employeeFullName}} a une pesée correspondant à {{peseePoints}} points établis comme suit :

Critères	Positionnement 	Points
1	Formation requise		
2	Complexité de l’emploi		
3	Autonomie		
4	Dimensions relationnelles avec le public accueilli		
5	Responsabilités financières		
6	Responsabilités dans la gestion des ressources humaines		
7	Sécurité des personnes et des matériels de l'entreprise		
8	Contribution au projet de l’entreprise		
Pesée de l’emploi 	

 ARTICLE 10 - RETRAITE ET PREVOYANCE 

{{employeeCivility}} {{employeeFullName}} bénéficiera du régime de retraite complémentaire auprès de {{retirementFundInfo}}.
{{employeeCivility}} {{employeeFullName}} bénéficiera également, sous réserve d’en remplir les conditions, d’un régime de prévoyance auprès du même organisme.

 ARTICLE 11 - PASSAGE A TEMPS PLEIN 

{{employeeCivility}} {{employeeFullName}} bénéficiera si elle le souhaite d’une priorité pour l’attribution d’un emploi à temps plein de sa catégorie professionnelle ou d’un emploi équivalent qui serait créé ou qui deviendrait vacant.

 ARTICLE 12 - EGALITE DE TRAITEMENT

{{employeeCivility}} {{employeeFullName}} bénéficiera de tous les droits et avantages reconnus aux salariés à temps plein, au prorata de son temps de travail conformément aux dispositions légales et conventionnelles.
L’association « {{associationName}} » garantit à {{employeeCivility}} {{employeeFullName}} un traitement équivalent aux salariés à temps plein de même qualification professionnelle et de même ancienneté, notamment en ce qui concerne les possibilités de promotion, de déroulement de carrière et d’accès à la formation professionnelle. 

ARTICLE 13 - DROIT A LA FORMATION
 
{{employeeCivility}} {{employeeFullName}} bénéficiera des actions de formation dans les conditions fixées par l’article L6312-1 du code du travail.

ARTICLE 14- CONGES PAYES

{{employeeCivility}} {{employeeFullName}} bénéficiera de congés payés légaux annuels de vingt-cinq jours ouvrés (2,08 jours de congés par mois) sur une période de référence allant du 1er juin de l’année N au 31 mai de l’année N+1.  

Par ailleurs, {{employeeCivility}} {{employeeFullName}} bénéficiera de {{additionalPaidLeaveDays}} jour de congé payé supplémentaire par mois sur la période de référence allant du 1er octobre de l’année N au 31 mai de l’année N+1. 

ARTICLE 15- RUPTURE DU CONTRAT 

A l’issue de la période d’essai, conformément aux dispositions légales, le présent contrat de travail ne pourra être rompu que dans les cas suivants : 
-	rupture conclue d’un commun accord entre le salarié et l’employeur. 
-	rupture à l’initiative de l’employeur pour faute grave, dans ce cas précis il faudra respecter la procédure disciplinaire ;
-	rupture à l’initiative du salarié lorsqu’il justifie d’une embauche en CDI ;
-	en cas de force majeure ; 
-	en cas d’inaptitude du salarié constatée par le médecin du travail.

Fait en deux exemplaires originaux pour chacune des parties.

Fait à {{signatureLocation}}, le {{signatureDate}}.

Pour l’association « {{associationName}} », 
{{issuerFullName}}						{{employeeCivility}} {{employeeFullName}}

Signature de l’employeur						Signature du salarié
								Précédée de la mention manuscrite
								« Lu et approuvé »
`;

const cddRemplacementPartielSansTermePrecisTemplate = `
Entre l’association {{associationName}} dont le siège social est situé {{associationAddress}}.
Représentée par {{issuerFullName}} agissant en qualité de {{issuerQuality}},

Et 

{{employeeCivility}} {{employeeFullName}} né le {{employeeDob}} immatriculé à la Sécurité Sociale sous le numéro {{employeeSocialSecurity}} et demeurant {{employeeAddress}}.

Il a été convenu ce qui suit :

 ARTICLE 1 - CONDITIONS D’ENGAGEMENT 

Le contrat de {{employeeCivility}} {{employeeFullName}} est régi par les dispositions de la Convention Collective Nationale des acteurs du lien social et familial : centres sociaux et socioculturels, établissement d’accueil de jeunes enfants, associations de développement social local du 4 juin 1983 qui peut être consultée {{ccnConsultationLocation}} ainsi que par les dispositions du présent contrat dont {{employeeCivility}} {{employeeFullName}} déclare avoir pris connaissance.

{{employeeCivility}} {{employeeFullName}} s’engage à respecter les obligations de loyauté et de discrétion attachées à son contrat de travail et à se conformer aux instructions de la direction concernant les conditions d’exécution du travail et aux dispositions du règlement intérieur dont un exemplaire lui a été remis ce jour .

{{employeeCivility}} {{employeeFullName}} déclare être libre de tout engagement et certifie n’exercer aucune autre activité salariée auprès d’un autre employeur pouvant le conduire à dépasser les durées maximales légales de travail, en application notamment des dispositions des articles L 3121-20 et suivants du code du travail.

{{employeeCivility}} {{employeeFullName}} atteste sur l’honneur ne pas avoir été condamné(e) définitivement pour crime ou à une peine d’au moins deux mois d’emprisonnement sans sursis pour un délit mentionné à l’article L.133-6 du Code de l’Action Sociale et des Familles. 
 
En cas de condamnation entrant dans le champ d’application de l’article L.133-6 du Code de l’Action Sociale et des Familles, compte tenu de son incidence sur l’exercice de son activité professionnelle au sein du centre, {{employeeCivility}} {{employeeFullName}} s’engage à en informer sans délai l’association.

 ARTICLE 2 - OBJET ET DUREE DU CONTRAT 
{{#if_fixed_term}}
{{employeeCivility}} {{employeeFullName}} est engagé(e) par l’association {{associationName}} pour une durée déterminée de {{duration}}, à compter du {{startDate}} jusqu’au {{endDate}} pour assurer le remplacement provisoire de {{replacedPersonCivility}} {{replacedPersonFullName}} employé(e) habituellement en qualité de {{replacedPersonJobTitle}} et absent(e) actuellement pour {{replacementReason}}.
{{/if_fixed_term}}
{{#if_not_fixed_term}}
{{employeeCivility}} {{employeeFullName}} est engagé(e) par l’association {{associationName}} pour une durée déterminée à compter du {{startDate}} pour assurer le remplacement provisoire de {{replacedPersonCivility}} {{replacedPersonFullName}} employé(e) habituellement en qualité de {{replacedPersonJobTitle}} et absent(e) actuellement pour {{replacementReason}}. Cet engagement comporte une durée minimale de {{trialPeriod}}. 
Si l’absence de {{replacedPersonCivility}} {{replacedPersonFullName}} se prolongeait au-delà de la durée minimale envisagée par le contrat, celui-ci se poursuivrait jusqu’à la date du retour de ce dernier, qui constituerait alors le terme automatique du contrat. Le contrat de {{employeeCivility}} {{employeeFullName}} pourra également prendre fin en cas de rupture du contrat de {{replacedPersonCivility}} {{replacedPersonFullName}}.
{{/if_not_fixed_term}}

 ARTICLE 3 - EMPLOI ET QUALIFICATION 

{{employeeCivility}} {{employeeFullName}} est employé(e) en qualité de {{jobTitle}} avec le statut de {{jobStatus}} sous la responsabilité de {{responsiblePersonTitle}} conformément à la fiche de poste remise. 
Cet emploi est rattaché à l’emploi repère {{jobBenchmark}} dans le système de classification conventionnelle. L’emploi est rattaché à la famille de métiers {{jobFamily}}.
{{employeeCivility}} {{employeeFullName}} s’engage à suivre des formations à la demande de son employeur.
{{employeeCivility}} {{employeeFullName}} s’engage à se soumettre à la visite médicale d’information et de prévention à laquelle il (elle) sera convoqué(e).

 ARTICLE 4 - PERIODE D’ESSAI 

Le présent contrat ne deviendra ferme qu’à l’issue d’une période d’essai de {{trialPeriod}}. Si une suspension du contrat de travail intervient pendant la période d’essai, celle-ci sera automatiquement prolongée d’une durée équivalente à la durée de la suspension. 
Durant la période d’essai, chacune des parties pourra mettre fin au contrat après avoir respecté, le cas échéant un délai de prévenance tel que défini aux articles L 1221-25 et L 1221-26  du code du travail sans indemnités d’aucune sorte. 
Pendant cette période d’essai, {{employeeCivility}} {{employeeFullName}} s’engage en outre à fournir tous les éléments nécessaires pour constituer son dossier, notamment copie des diplômes requis.

 ARTICLE 5 - LIEU DE TRAVAIL 

{{employeeCivility}} {{employeeFullName}} exercera principalement ses fonctions à {{workLocation}}. Ce lieu pourra être modifié en fonction des nécessités de service.

 ARTICLE 6 - DUREE DU TRAVAIL 

{{employeeCivility}} {{employeeFullName}} est embauché(e) à temps partiel.
{{employeeCivility}} {{employeeFullName}} effectuera {{weeklyHours}} heures hebdomadaires.
Cette répartition de la durée de travail indiquée ci-dessus pourra éventuellement être modifiée dans les conditions suivantes : en cas d’absence d’un ou plusieurs salariés, en cas de réorganisation des horaires collectifs, en cas de surcroît temporaire d’activité.
Une telle modification sera notifiée par écrit à {{employeeCivility}} {{employeeFullName}} 7 jours au moins avant sa date d’effet.

 ARTICLE 7 - HORAIRES DE TRAVAIL 

Les horaires de travail de {{employeeCivility}} {{employeeFullName}} lui seront communiqués par écrit .

 ARTICLE 8 - HEURES COMPLEMENTAIRES 

{{employeeCivility}} {{employeeFullName}} pourra être amené(e) à effectuer des heures complémentaires dans la limite d’un tiers de la durée prévue au contrat, soit {{complementaryHoursLimit}} heures hebdomadaires (ou heures mensuelles).
Les heures complémentaires effectuées ne peuvent avoir pour effet de porter la durée hebdomadaire de travail à un niveau égal ou supérieur à celui de la durée légale ou conventionnelle de travail.

 ARTICLE 9 - REMUNERATION  
{{employeeCivility}} {{employeeFullName}} perçoit une rémunération annuelle brute établie de la manière suivante:

-	Une rémunération de base pour un temps plein composée :
o	D’un salaire socle conventionnel qui s’élève, à ce jour, à {{salaireSocle}} euros annuels bruts. 
o	Auquel s’ajoute un salaire additionnel égal au produit du total des {{peseePoints}} points de pesée de {{employeeCivility}} {{employeeFullName}}, par la valeur du point fixée par la convention collective nationale, et qui est de {{valeurPoint}} euros, à ce jour. 
Soit un montant annuel brut, pour un temps plein de {{montantAnnuelBrutTempsPlein}} €.

{{employeeCivility}} {{employeeFullName}} étant à temps partiel à raison de {{weeklyHours}} heures par semaine, sa rémunération brute sera proratisée à hauteur de son temps de travail. {{employeeCivility}} {{employeeFullName}} percevra ainsi un montant annuel brut de {{montantAnnuelBrutFinal}} € versé par douzième.

-	A cette rémunération de base s’ajoute une rémunération liée à l’expérience professionnelle  :
o	La valorisation de l’ancienneté acquise au sein de la branche professionnelle Alisfa, égale au produit du (des) point(s) acquis à ce titre par {{employeeCivility}} {{employeeFullName}}, par la valeur du point fixée par la convention collective nationale, et qui est de {{valeurPoint}} euros , à ce jour. 
o	{{employeeCivility}} {{employeeFullName}}, bénéficiera de point tous les ans, à sa date anniversaire d’embauche. L’acquisition du point sera proratisée en fonction de son temps de travail contractuel, apprécié chaque mois anniversaire, conformément à l’article 1.2.1 du chapitre V.
o	{{employeeCivility}} {{employeeFullName}}, bénéficiera, conformément aux dispositions prévues à l’article 1.2.2 du chapitre V de la convention collective Alisfa, de points au titre de la valorisation de l’acquisition de compétences au sein de son emploi repère.

{{employeeCivility}} {{employeeFullName}} bénéficie en outre d’une indemnité à chaque fois que son emploi du temps comprend une coupure de plus de 2 heures, ou qu’il comprend plus d’une interruption au cours d’une journée de travail. 
Cette indemnité est versée à raison de 1 € par journée de travail effective comprenant une coupure intervenue dans ces conditions au cours du mois. 

Le poste de {{employeeCivility}} {{employeeFullName}} a une pesée correspondant à {{peseePoints}} points établis comme suit :

Critères	Positionnement 	Points
1	Formation requise		
2	Complexité de l’emploi		
3	Autonomie		
4	Dimensions relationnelles avec le public accueilli		
5	Responsabilités financières		
6	Responsabilités dans la gestion des ressources humaines		
7	Sécurité des personnes et des matériels de l'entreprise		
8	Contribution au projet de l’entreprise		
Pesée de l’emploi 	

 ARTICLE 10 - RETRAITE ET PREVOYANCE 

{{employeeCivility}} {{employeeFullName}} bénéficiera du régime de retraite complémentaire auprès de {{retirementFundInfo}}.
{{employeeCivility}} {{employeeFullName}} bénéficiera également, sous réserve d’en remplir les conditions, d’un régime de prévoyance auprès de l’organisme {{retirementFundInfo}}.

 ARTICLE 11 - PASSAGE A TEMPS PLEIN 

{{employeeCivility}} {{employeeFullName}} bénéficiera s’il le souhaite d’une priorité pour l’attribution d’un emploi à temps plein de sa catégorie professionnelle ou d’un emploi équivalent qui serait créé ou qui deviendrait vacant.

 ARTICLE 12 - EGALITE DE TRAITEMENT  

{{employeeCivility}} {{employeeFullName}} bénéficiera de tous les droits et avantages reconnus aux salariés à temps plein, au prorata de son temps de travail conformément aux dispositions légales et conventionnelles.
L’association {{associationName}} garantit à {{employeeCivility}} {{employeeFullName}} un traitement équivalent aux salariés à temps plein de même qualification professionnelle et de même ancienneté, notamment en ce qui concerne les possibilités de promotion, de déroulement de carrière et d’accès à la formation professionnelle. 

ARTICLE 13 - DROIT A LA FORMATION
{{employeeCivility}} {{employeeFullName}} bénéficiera des actions de formation dans les conditions fixées par l’article L6312-1 du code du travail.

ARTICLE 14- CONGES PAYES
{{employeeCivility}} {{employeeFullName}} bénéficiera de congés payés légaux annuels de vingt-cinq jours ouvrés (2,08 jours de congés par mois) sur une période de référence allant du 1er juin de l’année N au 31 mai de l’année N+1 .  
Par ailleurs, {{employeeCivility}} {{employeeFullName}} bénéficiera d’un jour de congé payé supplémentaire par mois sur la période de référence allant du 1er octobre de l’année N au 31 mai de l’année N+1 . 

ARTICLE 15- RUPTURE DU CONTRAT 
A l’issue de la période d’essai, conformément aux dispositions légales, le présent contrat de travail ne pourra être rompu que dans les cas suivants : 
-	rupture conclue d’un commun accord entre le salarié et l’employeur. 
-	rupture à l’initiative de l’employeur pour faute grave, dans ce cas précis il faudra respecter la procédure disciplinaire ;
-	rupture à l’initiative du salarié lorsqu’il justifie d’une embauche en CDI ;
-	en cas de force majeure ; 
-	en cas d’inaptitude du salarié constatée par le médecin du travail.

Fait en deux exemplaires originaux pour chacune des parties.
Fait à {{signatureLocation}} le {{signatureDate}}.

Pour l’association {{associationName}},
Le {{issuerQuality}},

{{employeeCivility}} {{issuerFullName}}   			{{employeeCivility}} {{employeeFullName}}

Signature de l’employeur  				Signature du salarié
						Précédée de la mention manuscrite
						« Lu et approuvé »
`;

const cdiPartielTemplate = `
Entre l’association {{associationName}} dont le siège social est situé {{associationAddress}},
Représentée par {{issuerFullName}}, agissant en qualité de {{issuerQuality}},

Et 

{{employeeCivility}} {{employeeFullName}} né le {{employeeDob}}, immatriculé à la Sécurité Sociale sous le numéro {{employeeSocialSecurity}} et demeurant {{employeeAddress}}.

Il a été convenu ce qui suit :

 ARTICLE 1- CONDITIONS D’ENGAGEMENT 

Le contrat de {{employeeCivility}} {{employeeFullName}} est régi par les dispositions de la convention collective nationale des acteurs du lien social et familial : centres sociaux et socioculturels, établissement d’accueil de jeunes enfants, associations de développement social local du 4 juin 1983 qui peut être consultée {{ccnConsultationLocation}} ainsi que par les dispositions du présent contrat dont {{employeeCivility}} {{employeeFullName}} déclare avoir pris connaissance.

{{employeeCivility}} {{employeeFullName}} s’engage à respecter les obligations de loyauté et de discrétion attachées à son contrat de travail et à se conformer aux instructions de la direction concernant les conditions d’exécution du travail et aux dispositions du règlement intérieur dont un exemplaire lui a été remis ce jour. 

{{employeeCivility}} {{employeeFullName}} déclare être libre de tout engagement et certifie n’exercer aucune autre activité salariée auprès d’un autre employeur pouvant le conduire à dépasser les durées maximales légales de travail, en application des dispositions des articles L 3121-20  et suivants du code du travail.

{{employeeCivility}} {{employeeFullName}} atteste sur l’honneur ne pas avoir été condamné(e) définitivement pour crime ou à une peine d’au moins deux mois d’emprisonnement sans sursis pour un délit mentionné à l’article L.133-6 du code de l’action sociale et des familles. 
 
En cas de condamnation entrant dans le champ d’application de l’article L.133-6 du code de l’action sociale et des familles, compte tenu de son incidence sur l’exercice de son activité professionnelle au sein du centre, {{employeeCivility}} {{employeeFullName}} s’engage à en informer sans délai l’association.

 ARTICLE 2- OBJET ET DUREE DU CONTRAT 

{{employeeCivility}} {{employeeFullName}} est engagé(e) par l’association {{associationName}} à compter du {{startDate}} et pour une durée indéterminée.

 ARTICLE 3- EMPLOI ET QUALIFICATION 

{{employeeCivility}} {{employeeFullName}} est employé(e) en qualité de {{jobTitle}} avec le statut de {{jobStatus}} sous la responsabilité de {{responsiblePersonTitle}} conformément à la fiche de poste remise. 

Cet emploi est rattaché à l’emploi repère {{jobBenchmark}} dans le système de classification conventionnelle.
L’emploi est rattaché à la famille de métiers {{jobFamily}}.

{{employeeCivility}} {{employeeFullName}} sera notamment chargé(e) de {{jobDescriptionSummary}}.
Ces fonctions peuvent être amenées à évoluer en fonctions des nécessités liées à l’activité de l’association.

{{employeeCivility}} {{employeeFullName}} s’engage à suivre des formations à la demande de son employeur.

 ARTICLE 4- PERIODE D’ESSAI 

Le présent contrat ne deviendra ferme qu’à l’issue d’une période d’essai de {{trialPeriod}}, renouvelable une fois. Si une suspension du contrat de travail intervient pendant la période d’essai, celle-ci sera automatiquement prolongée d’une durée équivalente à la durée de la suspension. 

Durant la période d’essai, chacune des parties pourra mettre fin au contrat après avoir respecté un délai de prévenance tel que défini aux articles L 1221-25 et L 1221-26 du code du travail sans indemnités d’aucune sorte.
 
Pendant cette période d’essai, {{employeeCivility}} {{employeeFullName}} s’engage en outre à fournir tous les éléments nécessaires pour constituer son dossier, copie des diplômes, notamment, ainsi qu’à se soumettre à la visite d’information et de prévention à laquelle il (elle) sera convoqué(e).

 ARTICLE 5- LIEU DE TRAVAIL 

{{employeeCivility}} {{employeeFullName}} exercera principalement ses fonctions à {{workLocation}}. Ce lieu pourra être modifié en fonction des nécessités de service.

 ARTICLE 6- DUREE DU TRAVAIL 

{{employeeCivility}} {{employeeFullName}} est embauché(e) à temps partiel.
{{employeeCivility}} {{employeeFullName}} effectuera {{weeklyHours}} heures hebdomadaires.
Cette répartition de la durée de travail indiquée ci-dessus pourra éventuellement être modifiée dans les conditions suivantes : en cas d’absence d’un ou plusieurs salariés, en cas de réorganisation des horaires collectifs, en cas de surcroît temporaire d’activité.
Une telle modification sera notifiée par écrit à {{employeeCivility}} {{employeeFullName}} 7 jours au moins avant sa date d’effet.

 ARTICLE 7- HORAIRES DE TRAVAIL 

Les horaires de travail de {{employeeCivility}} {{employeeFullName}} lui seront communiqués par écrit.

 ARTICLE 8- HEURES COMPLEMENTAIRES 

{{employeeCivility}} {{employeeFullName}} pourra être amené(e) à effectuer des heures complémentaires dans la limite d’un tiers de la durée prévue au contrat, soit {{complementaryHoursLimit}} heures hebdomadaires (ou heures mensuelles).
Les heures complémentaires effectuées ne peuvent avoir pour effet de porter la durée hebdomadaire de travail à un niveau égal ou supérieur à celui de la durée légale ou conventionnelle de travail.

 ARTICLE 9- REMUNERATION 

{{employeeCivility}} {{employeeFullName}} perçoit une rémunération annuelle brute établie de la manière suivante :

-	Une rémunération de base pour un temps plein composée :
o	D’un salaire socle conventionnel qui s’élève, à ce jour, à {{salaireSocle}} euros annuels bruts. 
o	Auquel s’ajoute un salaire additionnel égal au produit du total des {{peseePoints}} points de pesée de {{employeeCivility}} {{employeeFullName}}, par la valeur du point fixée par la convention collective nationale, et qui est de {{valeurPoint}} euros, à ce jour. 
Soit un montant annuel brut, pour un temps plein de {{montantAnnuelBrutTempsPlein}} €.

{{employeeCivility}} {{employeeFullName}} étant à temps partiel à raison de {{weeklyHours}} heures par semaine, sa rémunération brute sera proratisée à hauteur de son temps de travail. {{employeeCivility}} {{employeeFullName}} percevra ainsi un montant annuel brut de {{montantAnnuelBrutFinal}} € versé par douzième.

-	A cette rémunération de base s’ajoute une rémunération liée à l’expérience professionnelle :
o	La valorisation de l’ancienneté acquise au sein de la branche professionnelle Alisfa, égale au produit du (des) point(s) acquis à ce titre par {{employeeCivility}} {{employeeFullName}}, par la valeur du point fixée par la convention collective nationale, et qui est de {{valeurPoint}} euros, à ce jour. 
o	{{employeeCivility}} {{employeeFullName}}, bénéficiera de point tous les ans, à sa date anniversaire d’embauche. L’acquisition du point sera proratisée en fonction de son temps de travail contractuel, apprécié chaque mois anniversaire, conformément à l’article 1.2.1 du chapitre V.
o	{{employeeCivility}} {{employeeFullName}}, bénéficiera, conformément aux dispositions prévues à l’article 1.2.2 du chapitre V de la convention collective Alisfa, de points au titre de la valorisation de l’acquisition de compétences au sein de son emploi repère.

{{employeeCivility}} {{employeeFullName}} bénéficie en outre d’une indemnité à chaque fois que son emploi du temps comprend une coupure de plus de 2 heures, ou qu’il comprend plus d’une interruption au cours d’une journée de travail.
Cette indemnité est versée à raison de 1 € par journée de travail effective comprenant une coupure intervenue dans ces conditions au cours du mois. 

Le poste de {{employeeCivility}} {{employeeFullName}} a une pesée correspondant à {{peseePoints}} points établie comme suit :

Critères	Positionnement 	Points
1	Formation requise		
2	Complexité de l’emploi		
3	Autonomie		
4	Dimensions relationnelles avec le public accueilli		
5	Responsabilités financières		
6	Responsabilités dans la gestion des ressources humaines		
7	Sécurité des personnes et des matériels de l'entreprise		
8	Contribution au projet de l’entreprise		
Pesée de l’emploi 	

 ARTICLE 10- RETRAITE ET PREVOYANCE 

{{employeeCivility}} {{employeeFullName}} bénéficiera du régime de retraite complémentaire auprès de {{retirementFundInfo}}. 
{{employeeCivility}} {{employeeFullName}} bénéficiera également, sous réserve d’en remplir les conditions, d’un régime de prévoyance auprès de l’organisme {{retirementFundInfo}}.

 ARTICLE 11- PASSAGE A TEMPS PLEIN 

{{employeeCivility}} {{employeeFullName}} bénéficiera s’il le souhaite d’une priorité pour l’attribution d’un emploi à temps plein de sa catégorie professionnelle ou d’un emploi équivalent qui serait créé ou qui deviendrait vacant.

 ARTICLE 12- EGALITE DE TRAITEMENT  

{{employeeCivility}} {{employeeFullName}} bénéficiera de tous les droits et avantages reconnus aux salariés à temps plein, au prorata de son temps de travail conformément aux dispositions légales et conventionnelles.
L’association {{associationName}} garantit à {{employeeCivility}} {{employeeFullName}} un traitement équivalent aux salariés à temps plein de même qualification professionnelle et de même ancienneté, notamment en ce qui concerne les possibilités de promotion, de déroulement de carrière et d’accès à la formation professionnelle.

ARTICLE 13 - DROIT A LA FORMATION
 
{{employeeCivility}} {{employeeFullName}} bénéficiera des actions de formation dans les conditions fixées par l’article L6312-1 du code du travail.

ARTICLE 14- CONGES PAYES

{{employeeCivility}} {{employeeFullName}} bénéficiera de congés payés légaux annuels de vingt-cinq jours ouvrés (2,08 jours de congés par mois) sur une période de référence allant du 1er juin de l’année N au 31 mai de l’année N+1.  

Par ailleurs, {{employeeCivility}} {{employeeFullName}} bénéficiera d’un jour de congé payé supplémentaire par mois sur la période de référence allant du 1er octobre de l’année N au 31 mai de l’année N+1. 

 ARTICLE 15- PREAVIS 

A l’issue de la période d’essai, le présent contrat deviendra définitif. Toutefois, chacune des parties a le droit d’y mettre fin dans les conditions fixées à cet effet par la loi, sous réserve de respecter, sauf cas de faute grave ou lourde, un délai de préavis tel que fixé par la convention collective.

Fait en deux exemplaires originaux pour chacune des parties.

Fait à {{signatureLocation}} le {{signatureDate}}.

Pour l’association {{associationName}},
{{issuerQuality}},

{{employeeCivility}} {{issuerFullName}}   			{{employeeCivility}} {{employeeFullName}}

Signature de l’employeur 				Signature du salarié
						Précédée de la mention manuscrite
						« Lu et approuvé »
`;

const cdiPleinTemplate = `
Entre l’association {{associationName}} dont le siège social est situé {{associationAddress}}
Représentée par {{issuerFullName}} agissant en qualité de {{issuerQuality}},

Et {{employeeCivility}} {{employeeFullName}}, né le {{employeeDob}}, immatriculé à la Sécurité Sociale sous le numéro {{employeeSocialSecurity}} et demeurant {{employeeAddress}}

Il a été convenu ce qui suit :

 ARTICLE 1- CONDITIONS D’ENGAGEMENT 

Le contrat de {{employeeCivility}} {{employeeFullName}} est régi par les dispositions de la convention collective nationale des acteurs du lien social et familial : centres sociaux et socioculturels, établissement d’accueil de jeunes enfants, associations de développement social local du 4 juin 1983 qui peut être consultée {{ccnConsultationLocation}} ainsi que par les dispositions du présent contrat dont {{employeeCivility}} {{employeeFullName}} déclare avoir pris connaissance.

{{employeeCivility}} {{employeeFullName}} s’engage à respecter les obligations de loyauté et de discrétion attachées à son contrat de travail et à se conformer aux instructions de la direction concernant les conditions d’exécution du travail et aux dispositions du règlement intérieur dont un exemplaire lui a été remis ce jour. 

{{employeeCivility}} {{employeeFullName}} déclare être libre de tout engagement et certifie n’exercer aucune autre activité salariée auprès d’un autre employeur pouvant le conduire à dépasser les durées maximales légales de travail, en application notamment des dispositions des articles L 3121-20 et suivants du code du travail.

{{employeeCivility}} {{employeeFullName}} atteste sur l’honneur ne pas avoir été condamné(e) définitivement pour crime ou à une peine d’au moins deux mois d’emprisonnement sans sursis pour un délit mentionné à l’article L.133-6 du code de l’action sociale et des familles. 
 
En cas de condamnation entrant dans le champ d’application de l’article L.133-6 du code de l’action sociale et des familles, compte tenu de son incidence sur l’exercice de son activité professionnelle au sein du centre, {{employeeCivility}} {{employeeFullName}} s’engage à en informer sans délai l’association.

 ARTICLE 2- OBJET ET DUREE DU CONTRAT 

{{employeeCivility}} {{employeeFullName}} est engagé(e) par l’association {{associationName}} à compter du {{startDate}} et pour une durée indéterminée.

 ARTICLE 3- EMPLOI ET QUALIFICATION 

{{employeeCivility}} {{employeeFullName}} est employé(e) en qualité de {{jobTitle}}, avec le statut de {{jobStatus}} sous la responsabilité de {{responsiblePersonTitle}} conformément à la fiche de poste remise. 

Cet emploi est rattaché à l’emploi repère {{jobBenchmark}} dans le système de classification conventionnelle.
L’emploi est rattaché à la famille de métiers {{jobFamily}}.

{{employeeCivility}} {{employeeFullName}} sera notamment chargé(e) de {{jobDescriptionSummary}} 
Ces fonctions peuvent être amenées à évoluer en fonction des nécessités liées à l’activité de l’association.

{{employeeCivility}} {{employeeFullName}} s’engage à suivre des formations à la demande de son employeur.

 ARTICLE 4- PERIODE D’ESSAI 

Le présent contrat ne deviendra ferme qu’à l’issue d’une période d’essai de {{trialPeriod}}, renouvelable une fois. Si une suspension du contrat de travail intervient pendant la période d’essai, celle-ci sera automatiquement prolongée d’une durée équivalente à la durée de la suspension.

Durant la période d’essai, chacune des parties pourra mettre fin au contrat après avoir respecté un délai de prévenance tel que défini aux articles L 1221-25 et L 1221-26 du code du travail sans indemnités d’aucune sorte. 
 
Pendant cette période d’essai, {{employeeCivility}} {{employeeFullName}} s’engage en outre à fournir tous les éléments nécessaires pour constituer son dossier, copie des diplômes, notamment, ainsi qu’à se soumettre à la visite médicale d’information et de prévention à laquelle il (elle) sera convoqué(e).

 ARTICLE 5- LIEU DE TRAVAIL 

{{employeeCivility}} {{employeeFullName}} exercera principalement ses fonctions à {{workLocation}}. Ce lieu pourra être modifié en fonction des nécessités de service.  

 ARTICLE 6- DUREE DU TRAVAIL 

{{employeeCivility}} {{employeeFullName}} est embauché à temps plein, selon l’horaire collectif en vigueur.
L’organisation du temps de travail ainsi que les horaires de travail de {{employeeCivility}} {{employeeFullName}} lui seront communiqués par écrit.

 ARTICLE 7- HEURES SUPPLEMENTAIRES

Des heures supplémentaires pourront être demandées à {{employeeCivility}} {{employeeFullName}}, si nécessaire, dans le cadre des dispositions légales et conventionnelles.

 ARTICLE 8- REMUNERATION 

{{employeeCivility}} {{employeeFullName}} perçoit une rémunération annuelle brute établie de la manière suivante:

-	Une rémunération de base pour un temps plein composée :
o	D’un salaire socle conventionnel qui s’élève, à ce jour, à {{salaireSocle}} euros annuels bruts. 
o	Auquel s’ajoute un salaire additionnel égal au produit du total des {{peseePoints}} points de pesée de {{employeeCivility}} {{employeeFullName}}, par la valeur du point fixée par la convention collective nationale, et qui est de {{valeurPoint}} euros, à ce jour. 
Soit un montant annuel brut de {{montantAnnuelBrutFinal}} € versés mensuellement par douzième.

-	A cette rémunération de base s’ajoute une rémunération liée à l’expérience professionnelle :
o	La valorisation de l’ancienneté acquise au sein de la branche professionnelle Alisfa, égale au produit du (des) point(s) acquis à ce titre par {{employeeCivility}} {{employeeFullName}}, par la valeur du point fixée par la convention collective nationale, et qui est de {{valeurPoint}} euros, à ce jour. 
o	{{employeeCivility}} {{employeeFullName}}, bénéficiera de point tous les ans, à sa date anniversaire d’embauche, conformément à l’article 1.2.1 du chapitre V. 
o	{{employeeCivility}} {{employeeFullName}}, bénéficiera, conformément aux dispositions prévues à l’article 1.2.2 du chapitre V de la convention collective Alisfa, de points au titre de la valorisation de l’acquisition de compétences au sein de son emploi repère.

Le poste de {{employeeCivility}} {{employeeFullName}} a une pesée correspondant à {{peseePoints}} points établie comme suit :

CRITERES	POSITIONNEMENT 	POINTS
1	FORMATION REQUISE		
2	COMPLEXITE DE L’EMPLOI		
3	AUTONOMIE		
4	DIMENSIONS RELATIONNELLES AVEC LE PUBLIC ACCUEILLI		
5	RESPONSABILITES FINANCIERES		
6	RESPONSABILITES DANS LA GESTION DES RESSOURCES HUMAINES		
7	SECURITE DES PERSONNES ET DES MATERIELS DE L'ENTERPRISE		
8	CONTRIBUTION AU PROJET DE L’ENTREPRISE		
PESEE DE L’EMPLOI 	

 ARTICLE 9- RETRAITE ET PREVOYANCE 

{{employeeCivility}} {{employeeFullName}} bénéficiera du régime de retraite complémentaire auprès de {{retirementFundInfo}}. 
{{employeeCivility}} {{employeeFullName}} bénéficiera également, sous réserve d’en remplir les conditions, d’un régime de prévoyance auprès de l’organisme {{retirementFundInfo}}. 

 ARTICLE 10 - DROIT A LA FORMATION
 
{{employeeCivility}} {{employeeFullName}} bénéficiera des actions de formation dans les conditions fixées par l’article L6312-1 du code du travail.

ARTICLE 11- CONGES PAYES

{{employeeCivility}} {{employeeFullName}} bénéficiera de congés payés légaux annuels de vingt-cinq jours ouvrés (2,08 jours de congés par mois) sur une période de référence allant du 1er juin de l’année N au 31 mai de l’année N+1.  

Par ailleurs, {{employeeCivility}} {{employeeFullName}} bénéficiera d’un jour de congé payé supplémentaire par mois sur la période de référence allant du 1er octobre de l’année N au 31 mai de l’année N+1. 

ARTICLE 12- PREAVIS 

A l’issue de la période d’essai, le présent contrat deviendra définitif. Toutefois, chacune des parties a le droit d’y mettre fin dans les conditions fixées à cet effet par la loi, sous réserve de respecter, sauf cas de faute grave ou lourde, un délai de préavis tel que fixé par la convention collective.

Fait en deux exemplaires originaux pour chacune des parties.

Fait à {{signatureLocation}} le {{signatureDate}}.

Pour l’association {{associationName}},
{{issuerQuality}},

{{employeeCivility}} {{issuerFullName}} 			                {{employeeCivility}} {{employeeFullName}}

Signature de l’employeur 				Signature du salarié
						Précédée de la mention manuscrite
						« Lu et approuvé »
`;


export const getContractTemplate = (type: ContractType): string => {
  switch (type) {
    case ContractType.CDD_REMP_PARTIEL_TERME_PRECIS:
      return cddRemplacementPartielTermePrecisTemplate;
    case ContractType.CDD_REMP_PARTIEL_SANS_TERME_PRECIS:
      return cddRemplacementPartielSansTermePrecisTemplate;
    case ContractType.CDI_PARTIEL:
      return cdiPartielTemplate;
    case ContractType.CDI_PLEIN:
      return cdiPleinTemplate;
    default:
      return "Modèle non trouvé.";
  }
};
