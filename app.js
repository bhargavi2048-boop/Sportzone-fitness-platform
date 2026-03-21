/* ============================================
   SPORTZONE — Main JavaScript
   ============================================ */

/* ── Screen Navigation ── */
function go(id) {
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });
  var screen = document.getElementById(id);
  if (!screen) { console.warn('Screen not found:', id); return; }
  screen.classList.add('active');

  // Status bar colour
  var darkScreens = ['s1', 's7b', 's11'];
  var sb = document.getElementById('status-bar');
  if (sb) sb.style.color = darkScreens.includes(id) ? '#fff' : 'var(--text)';

  // Scroll to top
  var sc = screen.querySelector('.scroll-content');
  if (sc) sc.scrollTop = 0;
}

/* ── Chip Selection (single-select row) ── */
function chipSel(el) {
  var row = el.closest('.chips-row');
  if (row) {
    row.querySelectorAll('.chip').forEach(function(c) { c.classList.remove('active'); });
  }
  el.classList.add('active');
}

/* ── Date Pill Selection ── */
function dateSel(el) {
  var container = el.parentElement;
  container.querySelectorAll('.date-pill').forEach(function(d) {
    d.classList.remove('active');
    d.style.color = '';
  });
  el.classList.add('active');
  el.style.color = '#fff';
}

/* ── Slot / Position Chip Selection ── */
function slotSel(el) {
  if (el.classList.contains('taken')) return;
  el.parentElement.querySelectorAll('.slot-chip').forEach(function(s) {
    if (!s.classList.contains('taken')) s.classList.remove('selected');
  });
  el.classList.add('selected');
}

/* ── Payment Method Selection ── */
function paySel(el) {
  document.querySelectorAll('.pay-method').forEach(function(p) {
    p.classList.remove('selected');
    p.querySelector('.radio').classList.remove('on');
  });
  el.classList.add('selected');
  el.querySelector('.radio').classList.add('on');
}

/* ── Toggle Switch ── */
function toggleSwitch(id) {
  var tog = document.getElementById(id);
  if (!tog) return;
  tog.classList.toggle('on');
}

/* ── Filter Bottom Sheet ── */
function openSheet() {
  var overlay = document.getElementById('filterOverlay');
  if (overlay) overlay.classList.add('open');
}

function closeSheet() {
  var overlay = document.getElementById('filterOverlay');
  if (overlay) overlay.classList.remove('open');
}

/* ── Price Slider Sync ── */
function syncPrice(val) {
  val = parseInt(val, 10);
  var display = document.getElementById('priceVal');
  var slider  = document.getElementById('priceSlider');
  if (display) display.textContent = '₹' + val;
  if (slider)  slider.value = val;

  // Sync quick-pick chips
  var map = { pc200: 200, pc300: 300, pc500: 500, pcAny: 2000 };
  Object.keys(map).forEach(function(id) {
    var chip = document.getElementById(id);
    if (!chip) return;
    var active = map[id] === val;
    chip.style.borderColor = active ? 'var(--primary)' : 'var(--border)';
    chip.style.background  = active ? 'var(--primary-light)' : 'var(--bg)';
    chip.style.color       = active ? 'var(--primary)' : 'var(--text-muted)';
  });

  // Live result count heuristic
  var count = val <= 200 ? 3 : val <= 300 ? 5 : val <= 500 ? 8 : 12;
  var applyBtn = document.getElementById('applyBtn');
  if (applyBtn) applyBtn.textContent = 'Apply Filters · ' + count + ' Results';

  // Sync "Under ₹500" chip on search screen header
  var chip500 = document.getElementById('under500chip');
  if (chip500) {
    if (val <= 500) chip500.classList.add('active');
    else chip500.classList.remove('active');
  }
}

/* ── Reset Filters ── */
function resetFilters() {
  syncPrice(500);
  var ds = document.getElementById('distSlider');
  var dv = document.getElementById('distVal');
  if (ds) ds.value = 10;
  if (dv) dv.textContent = '5 km';
}

/* ── Chat: Quick Reply ── */
function sendQuickReply(chip) {
  var text = chip.textContent.trim();
  var msgs = document.getElementById('chatMessages');
  if (!msgs) return;

  // Hide all quick replies
  var qr = document.getElementById('quickReplies');
  if (qr) qr.style.display = 'none';

  // Append sent bubble
  appendOutBubble(msgs, text);

  // Auto-reply after 900 ms
  setTimeout(function() {
    appendInBubble(msgs,
      'Bring your racket and non-marking shoes. Shuttlecocks are provided 🏸');
  }, 900);
}

/* ── Chat: Send typed message ── */
function sendChatMsg() {
  var input = document.getElementById('chatInput');
  if (!input) return;
  var text = input.textContent.trim();
  var placeholder = 'Type a message…';
  if (!text || text === placeholder) return;

  var msgs = document.getElementById('chatMessages');
  appendOutBubble(msgs, text);

  input.textContent = '';
  input.style.color = 'var(--text-muted)';
  input.blur();
}

/* ── Chat helpers ── */
function appendOutBubble(container, text) {
  var div = document.createElement('div');
  div.className = 'bubble-out';
  div.innerHTML =
    '<div class="body">' +
      '<div class="bubble-text">' + escapeHtml(text) + '</div>' +
      '<div class="bubble-time">Just now ✓✓</div>' +
    '</div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function appendInBubble(container, text) {
  var div = document.createElement('div');
  div.className = 'bubble-in';
  div.innerHTML =
    '<div class="avatar" style="background:#059669;width:28px;height:28px;font-size:10px;flex-shrink:0;">SK</div>' +
    '<div class="body">' +
      '<div class="bubble-text">' + escapeHtml(text) + '</div>' +
      '<div class="bubble-time">Just now</div>' +
    '</div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Venue Host / Trainer: Accept / Decline ── */
function acceptRequest(btn) {
  var row = btn.closest('.pending-row');
  if (row) {
    row.style.opacity = '0';
    row.style.transition = 'opacity .3s';
    setTimeout(function() { row.remove(); }, 320);
  }
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', function() {

  // Set initial toggle states via data-on attribute
  document.querySelectorAll('.toggle').forEach(function(tog) {
    if (tog.dataset.on === '1') tog.classList.add('on');
  });

  // Filter overlay close on backdrop click
  var overlay = document.getElementById('filterOverlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeSheet();
    });
  }

  // Chat input placeholder behaviour
  var chatInput = document.getElementById('chatInput');
  if (chatInput) {
    var placeholder = 'Type a message…';
    chatInput.addEventListener('focus', function() {
      if (chatInput.textContent.trim() === placeholder) {
        chatInput.textContent = '';
        chatInput.style.color = 'var(--text)';
      }
    });
    chatInput.addEventListener('blur', function() {
      if (!chatInput.textContent.trim()) {
        chatInput.textContent = placeholder;
        chatInput.style.color = 'var(--text-muted)';
      }
    });
    // Send on Enter (not Shift+Enter)
    chatInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMsg();
      }
    });
  }

  // Initialise price display
  syncPrice(500);

  console.log('SportZone prototype loaded — 18 screens ready.');
});
