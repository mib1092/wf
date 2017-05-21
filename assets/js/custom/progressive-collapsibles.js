/* 3. Progressive collapsibles
-----------------------------------------------------------------------------------------
*/

$('.accordion-list > li').each(function() {

  var $this = $(this);

  // create unique id for a11y relationship

  var id = 'collapsible-' + $this.index();

  // wrap the content and make it focusable

  $this.find('.accordion-box-content').wrapAll('<div id="'+ id +'" aria-hidden="true">');
  var panel = $this.children('h2').next();
  console.log(panel);

  // Add the button inside the <h2> so both the heading and button semanics are read

  $this.children('h2').wrapInner('<a href="#" aria-expanded="false" aria-controls="'+ id +'">');
  var button = $this.find('h2 a');

  // Toggle the state properties

  button.on('click', function(e) {
    e.preventDefault();
    var state = $(this).attr('aria-expanded') === 'false' ? true : false;
    $(this).attr('aria-expanded', state);
    panel.attr('aria-hidden', !state);
  });

});