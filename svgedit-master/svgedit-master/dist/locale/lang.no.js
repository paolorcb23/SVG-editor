var svgEditorLang_no = (function () {
  'use strict';

  var lang_no = {
    lang: 'no',
    dir: 'ltr',
    common: {
      ok: 'Lagre',
      cancel: 'Avbryt',
      key_backspace: 'backspace',
      key_del: 'delete',
      key_down: 'down',
      key_up: 'up',
      more_opts: 'More Options',
      url: 'URL',
      width: 'Width',
      height: 'Height'
    },
    misc: {
      powered_by: 'Powered by'
    },
    ui: {
      toggle_stroke_tools: 'Show/hide more stroke tools',
      palette_info: 'Click å endre fyllfarge, shift-klikke for å endre slag farge',
      zoom_level: 'Endre zoomnivå',
      panel_drag: 'Drag left/right to resize side panel',
      quality: 'Quality:',
      pathNodeTooltip: 'Drag node to move it. Double-click node to change segment type',
      pathCtrlPtTooltip: 'Drag control point to adjust curve properties',
      pick_stroke_paint_opacity: 'Pick a Stroke Paint and Opacity',
      pick_fill_paint_opacity: 'Pick a Fill Paint and Opacity'
    },
    properties: {
      id: 'Identify the element',
      fill_color: 'Endre fyllfarge',
      stroke_color: 'Endre stroke color',
      stroke_style: 'Endre stroke dash stil',
      stroke_width: 'Endre stroke width',
      pos_x: 'Change X coordinate',
      pos_y: 'Change Y coordinate',
      linecap_butt: 'Linecap: Butt',
      linecap_round: 'Linecap: Round',
      linecap_square: 'Linecap: Square',
      linejoin_bevel: 'Linejoin: Bevel',
      linejoin_miter: 'Linejoin: Miter',
      linejoin_round: 'Linejoin: Round',
      angle: 'Endre rotasjonsvinkelen',
      blur: 'Change gaussian blur value',
      opacity: 'Endre valgte elementet opasitet',
      circle_cx: 'Endre sirkelens CX koordinatsystem',
      circle_cy: 'Endre sirkelens koordinere cy',
      circle_r: 'Endre sirkelens radius',
      ellipse_cx: 'Endre ellipse&#39;s CX koordinatsystem',
      ellipse_cy: 'Endre ellipse&#39;s koordinere cy',
      ellipse_rx: 'Endre ellipse&#39;s x radius',
      ellipse_ry: 'Endre ellipse&#39;s y radius',
      line_x1: 'Endre linje begynner x koordinat',
      line_x2: 'Endre linje&#39;s ending x koordinat',
      line_y1: 'Endre linje begynner y koordinat',
      line_y2: 'Endre linje&#39;s ending y koordinat',
      rect_height: 'Endre rektangel høyde',
      rect_width: 'Endre rektangel bredde',
      corner_radius: 'Endre rektangel Corner Radius',
      image_width: 'Endre bilde bredde',
      image_height: 'Endre bilde høyde',
      image_url: 'Endre URL',
      node_x: "Change node's x coordinate",
      node_y: "Change node's y coordinate",
      seg_type: 'Change Segment type',
      straight_segments: 'Straight',
      curve_segments: 'Curve',
      text_contents: 'Endre tekst innholdet',
      font_family: 'Change Font Family',
      font_size: 'Endre skriftstørrelse',
      bold: 'Fet tekst',
      italic: 'Kursiv tekst'
    },
    tools: {
      main_menu: 'Main Menu',
      bkgnd_color_opac: 'Endre bakgrunnsfarge / opacity',
      connector_no_arrow: 'No arrow',
      fitToContent: 'Fit to Content',
      fit_to_all: 'Passer til alt innhold',
      fit_to_canvas: 'Tilpass til lerret',
      fit_to_layer_content: 'Fit to lag innhold',
      fit_to_sel: 'Tilpass til valg',
      align_relative_to: 'Juster i forhold til ...',
      relativeTo: 'i forhold til:',
      page: 'side',
      largest_object: 'største objekt',
      selected_objects: 'velges objekter',
      smallest_object: 'minste objekt',
      new_doc: 'New Image',
      open_doc: 'Åpne Image',
      export_img: 'Export',
      save_doc: 'Lagre bilde',
      import_doc: 'Import Image',
      align_to_page: 'Align Element to Page',
      align_bottom: 'Align Bottom',
      align_center: 'Midtstill',
      align_left: 'Venstrejuster',
      align_middle: 'Rett Middle',
      align_right: 'Høyrejuster',
      align_top: 'Align Top',
      mode_select: 'Select Tool',
      mode_fhpath: 'Pencil Tool',
      mode_line: 'Linjeverktøy',
      mode_rect: 'Rectangle Tool',
      mode_square: 'Square Tool',
      mode_fhrect: 'Free-Hand rektangel',
      mode_ellipse: 'Ellipse',
      mode_circle: 'Circle',
      mode_fhellipse: 'Free-Hand Ellipse',
      mode_path: 'Path Tool',
      mode_text: 'Text Tool',
      mode_image: 'Image Tool',
      mode_zoom: 'Zoom Tool',
      no_embed: 'NOTE: This image cannot be embedded. It will depend on this path to be displayed',
      undo: 'Angre',
      redo: 'Redo',
      tool_source: 'Edit Source',
      wireframe_mode: 'Wireframe Mode',
      clone: 'Clone Element(s)',
      del: 'Delete Element(s)',
      group_elements: 'Gruppe Elements',
      make_link: 'Make (hyper)link',
      set_link_url: 'Set link URL (leave empty to remove)',
      to_path: 'Convert to Path',
      reorient_path: 'Reorient path',
      ungroup: 'Dele opp Elements',
      docprops: 'Document Properties',
      move_bottom: 'Move to Bottom',
      move_top: 'Flytt til toppen',
      node_clone: 'Clone Node',
      node_delete: 'Delete Node',
      node_link: 'Link Control Points',
      add_subpath: 'Add sub-path',
      openclose_path: 'Open/close sub-path',
      source_save: 'Lagre',
      cut: 'Cut',
      copy: 'Copy',
      paste: 'Paste',
      paste_in_place: 'Paste in Place',
      delete: 'Delete',
      group: 'Group',
      move_front: 'Bring to Front',
      move_up: 'Bring Forward',
      move_down: 'Send Backward',
      move_back: 'Send to Back'
    },
    layers: {
      layer: 'Layer',
      layers: 'Layers',
      del: 'Slett laget',
      move_down: 'Flytt laget ned',
      new: 'Nytt lag',
      rename: 'Rename Layer',
      move_up: 'Flytt Layer Up',
      dupe: 'Duplicate Layer',
      merge_down: 'Merge Down',
      merge_all: 'Merge All',
      move_elems_to: 'Move elements to:',
      move_selected: 'Move selected elements to a different layer'
    },
    config: {
      image_props: 'Image Properties',
      doc_title: 'Title',
      doc_dims: 'Canvas Dimensions',
      included_images: 'Included Images',
      image_opt_embed: 'Embed data (local files)',
      image_opt_ref: 'Use file reference',
      editor_prefs: 'Editor Preferences',
      icon_size: 'Icon size',
      language: 'Language',
      background: 'Editor Background',
      editor_img_url: 'Image URL',
      editor_bg_note: 'Note: Background will not be saved with image.',
      icon_large: 'Large',
      icon_medium: 'Medium',
      icon_small: 'Small',
      icon_xlarge: 'Extra Large',
      select_predefined: 'Velg forhåndsdefinerte:',
      units_and_rulers: 'Units & Rulers',
      show_rulers: 'Show rulers',
      base_unit: 'Base Unit:',
      grid: 'Grid',
      snapping_onoff: 'Snapping on/off',
      snapping_stepsize: 'Snapping Step-Size:',
      grid_color: 'Grid color'
    },
    notification: {
      invalidAttrValGiven: 'Invalid value given',
      noContentToFitTo: 'No content to fit to',
      dupeLayerName: 'There is already a layer named that!',
      enterUniqueLayerName: 'Please enter a unique layer name',
      enterNewLayerName: 'Please enter the new layer name',
      layerHasThatName: 'Layer already has that name',
      QmoveElemsToLayer: "Move selected elements to layer '%s'?",
      QwantToClear: 'Do you want to clear the drawing?\nThis will also erase your undo history!',
      QwantToOpen: 'Do you want to open a new file?\nThis will also erase your undo history!',
      QerrorsRevertToSource: 'There were parsing errors in your SVG source.\nRevert back to original SVG source?',
      QignoreSourceChanges: 'Ignore changes made to SVG source?',
      featNotSupported: 'Feature not supported',
      enterNewImgURL: 'Enter the new image URL',
      defsFailOnSave: 'NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.',
      loadingImage: 'Loading image, please wait...',
      saveFromBrowser: "Select 'Save As...' in your browser (possibly via file menu or right-click context-menu) to save this image as a %s file.",
      noteTheseIssues: 'Also note the following issues: ',
      unsavedChanges: 'There are unsaved changes.',
      enterNewLinkURL: 'Enter the new hyperlink URL',
      errorLoadingSVG: 'Error: Unable to load SVG data',
      URLloadFail: 'Unable to load from URL',
      retrieving: 'Retrieving \'%s\' ...',
      popupWindowBlocked: 'Popup window may be blocked by browser',
      exportNoBlur: 'Blurred elements will appear as un-blurred',
      exportNoforeignObject: 'foreignObject elements will not appear',
      exportNoDashArray: 'Strokes will appear filled',
      exportNoText: 'Text may not appear as expected'
    }
  };

  return lang_no;

}());
