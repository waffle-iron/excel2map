module Translations {
    export class DutchAdditional {
        public static locale: ng.translate.ITranslationTable = {
            UPLOAD_FROM_EXCEL2MAP: 'Upload je data vanuit Excel2Map',
            UPLOAD_TABULAR_DATA: 'Upload je tabulaire data van Excel, Matlab, R, etc.',
            UPLOAD_DESCRIPTION: 'De data kan op verschillende manieren geüpload worden. Mits de netwerkinstellingen het toelaten, is een simpele druk op de knop in het Excel-werkblad genoeg om de data automatisch te uploaden. Verschijnt er een foutmelding in Excel, gebruik dan één van de onderstaande opties om de kaart aan te maken.',
            PASTE_CLIPBOARD: 'Plakken vanaf het klembord',
            PASTE_CLIPBOARD_DESCRIPTION: 'Plak de data vanaf het klembord naar dit tekstveld. Klik daarvoor eerst op de upload-knop in het Excel-werkblad, om de benodigde data naar het klembord te kopiëren.',
            UPLOAD_FILE: 'Upload bestand',
            UPLOAD_FILE_DESCRIPTION: 'Upload het *.json bestand dat opgeslagen staat op je computer.',
            DRAG_FILE: 'Sleep bestand naar deze widget.',
            DRAG_FILE_DESCRIPTION: 'Sleep het json-bestand van je bestandsverkenner naar dit blok.',
            ERROR_UPLOADING_PROJECT: 'Fout bij het uploaden van het project',
            UNAUTHORIZED: 'Je bent niet bevoegd om dit project te wijzigen. Heb je het goede wachtwoord ingevuld?',
            ERROR_MSG: 'Foutmelding ontvangen bij het uploaden van de data: {{msg}}',
            MANUAL_UPLOAD_MODE: 'Handmatige upload mode',
            TABLE2MAP: 'Tabel naar kaart',
            HAS_HEADER: 'Data bevat kopteksten',
            DELIMITER: 'Scheidingsteken',
            CSV_PARSE_SETTINGS: 'Geavanceerd: configureer de data import instellingen',
            SEARCH_IN_DATA: 'Zoek in de data',
            SHOW_NR_OF_TOTAL: 'Toon {{nr}} van de {{total}} rijen.',
            CSV_PARSE_SETTINGS_HELP: 'Geef aan of de data kopteksten bevat en wat voor scheidingstekens worden gebruikt tussen de kolommen.',
            DECIMAL_CHARACTER: 'Decimaal teken',
            NO_DATA_TABLE: 'Geen tabulaire data gevonden. Ga terug naar stap 1.',
            UPLOAD_HELP: 'Sleep een bestand naar het tekstvak hieronder. Een andere optie is om de data via het klembord in het tekstvak te plakken.',
            STYLE_PREVIEW: 'Preview',
            SELECTED_PROPERTY: 'Geselecteerde eigenschap',
            FEATURE_SELECTED: 'Object is geselecteerd',
            FEATURE_DESELECTED: 'Object is niet geselecteerd',
            CURRENT_ZOOM: 'Huidig zoomniveau',
            SELECT_GEOMETRY_COLUMNS: 'Selecteer de geometrie-kolommen',
            GEOMETRY_TYPE: 'Geometrie / indeling',
            SELECT_GEOMETRY_COLUMNS_HELP: 'Selecteer de kolommen die bepalen waar een object op de kaart moet komen te staan. Dit kan bijvoorbeeld de provincienaam zijn, de combinatie van postcode en huisnummer, een set coordinaten, enz.',
            COLUMN: 'Kolom',
            SELECT_FEATURE_TO_PREVIEW: 'Selecteer een item voor de voorvertoning',
            UPLOAD_ICON: 'Upload icoon',
            SWAP_ROWS: 'Verwissel de twee rijen',
            SELECT_THESE_ITEMS: 'Selecteer de volgende data',
            SELECT_COLS: 'Selecteer kolom(men)',
            EDIT_PROPERTYTYPE: 'Bewerk hoe deze eigenschap getoond wordt',
            PROPERTY_SETTINGS_HELP: 'Selecteer de titel van een eigenschap in het rechter voorbeeld paneel om aan te passen hoe die eigenschap wordt getoond (titel, afronding, enz).',
            SELECT_NAMELABEL_COLUMN: 'Selecteer de kolom met titels',
            SELECT_NAMELABEL_COLUMN_HELP: 'Selecteer de kolom waarin de titel van elk object staat, bijv. de provincie- of ziekenhuisnaam. Deze titel zal worden getoond als een object door de gebruiker wordt geselecteerd, of er overheen beweegt met de muis.',
            PREVIOUS_STEP: 'Vorige stap',
            NEXT_STEP: 'Volgende stap',
            LOAD_OR_CREATE_PROJECT: 'Laad of creëer een project',
            LOAD_OR_CREATE_BUTTON: 'Laad / creëer',
            CREATE_BUTTON: 'Creëer',
            PROJECT_ID: 'Project ID',
            DATA_TO_MAP: 'Data naar de kaart',
            STYLE_SETTINGS: 'Stijl instellingen',
            ADDITIONAL_INFO: 'Extra informatie',
            PROJECT_SETTINGS: 'Project instellingen',
            PROJECT_SETTINGS_HELP: '',
            DATA_PARSED_CORRECTLY: 'Data is goed verwerkt',
            LOGO: 'Logo',
            FIT_TO_MAP: 'Passend maken',
            FIT_TO_MAP_HELP: 'Pas het zoombereik van de kaart aan zodat alle items zichtbaar zijn bij het activeren van de kaartlaag.',
            ENABLED: 'Standaard geactiveerd',
            ENABLED_HELP: 'Indien geselecteerd wordt de kaartlaag bij het openen van het project automatisch geactiveerd',
            SELECT_OR_CREATE_GROUP: 'Kies of creëer een groep',
            SELECT_OR_CREATE_SECTION: 'Kies of creëer een sectie',
            SELECT_GEOMETRYTYPE_FIRST: 'Kies eerst een geometrie / indeling',
            NOTHING_TO_SELECT: 'Er hoeft niets geselecteerd te worden',
            NO_COLUMN_SELECTED: 'niets geselecteerd',
            SELECT_NR_COLUMNS: '{{(nr == 1 ? nr + " kolom" : nr + " kolommen")}} geselecteerd',
            SHOW_HIDE_COLUMN_TITLES: 'Toon/verberg kolom titels',
            TABLE_HELP: 'Hieronder wordt de tabel met uw data getoond. Er wordt aangegeven welke rijen of kolommen u dient te selecteren.',
            ICON_IMAGE: 'Icoon afbeelding',
            ICON_DIMENSIONS: 'Afmetingen',
            ICON_HEIGHT: 'Hoogte',
            ICON_WIDTH: 'Breedte',
            FILL_COLOR: 'Vulkleur',
            STROKE_COLOR: 'Lijnkleur',
            SELECTED_STROKE_COLOR: 'Lijnkleur (geselecteerd)',
            STROKE_WIDTH: 'Lijndikte',
            SELECTED_STROKE_WIDTH: 'Lijndikte (geselecteerd)',
            TRANSPARENCY: 'Transparantie',
            CORNER_RADIUS: 'Afronding hoeken (%)',
            CLUSTERING_OPTIONS: 'Groepering opties',
            CLUSTERING: 'Groepeer kaartitems',
            CLUSTER_LEVEL: 'Vanaf zoomniveau',
            DATA_RANGE: 'Data bereik',
            ADVANCED_SETTINGS: 'Geavanceerde instellingen',
            SHOW_PROJECT: 'Open het aangemaakte project',
            SHOW_TABLE: 'Toon een tabel met de data',
            TOO_MANY_COLS: 'Teveel kolommen',
            TOO_MANY_COLS_MSG: 'Er zijn teveel kolommen geselecteerd. Deselecteer een kolom voordat een nieuwe kolom geselecteerd kan worden.',
            FILE_TOO_LARGE: 'Bestand is te groot',
            FILE_TOO_LARGE_MSG: 'De bestandsgrootte overschrijdt de limiet van {{size}} kB. Kies een kleiner bestand.',
            UNKNOWN_FORMAT: 'Onbekend bestandstype',
            UNKNOWN_FORMAT_MSG: 'Kies een ondersteund bestandstype ({{type}})',
            VISIBILITY: 'Zichtbaarheid',
            VISIBLE_IN_TOOLTIP: 'Toon eigenschap in tooltip',
            PROJECTS_LIST: 'Beschikbare projecten',
            CREATE_NEW_PROJECT: 'Maak nieuw project',
            CREATE_NEW_LAYER: 'Maak nieuwe kaartlaag',
            CREATE_NEW_GROUP: 'Maak nieuwe groep',
            UPLOAD_SUCCESS: 'Kaartlaag aangemaakt',
            UPLOAD_SUCCESS_MSG: 'De kaartlaag is aangemaakt. Klik op onderstaande link om het project te openen.',
            INVALID_INPUT: 'Deze titel is ongeldig. Gebruik minstens 2 karakters en geen aanhalingstekens.',
            CHECKING: 'Wordt gecontroleerd...',
            CAN_VIEW: 'Bekijken',
            CAN_EDIT: 'Bewerken',
            EDIT: 'Bewerken',
            SELECT: 'Selecteer',
            EDIT_LAYER: 'Kies een kaartlaag om te bewerken',
            SAVE_AND_OPEN: 'Opslaan en resultaat bekijken',
            ERROR_GETTING_LAYER: 'Fout bij ophalen kaartlaag',
            MANAGE_RIGHTS: 'Beheer rechten',
            NO_NAMELABEL_SELECTED: 'Geen titel geselecteerd'
        };
    }
}