export function renderPendingEarnIncomeCard(data) {
  return [
    `<div class="downtime-pending-earn-income"`,
    `data-actor-id="${data.actorId}"`,
    `data-skill-slug="${data.skillSlug}"`,
    `data-skill-label="${foundry.utils.escapeHTML(data.skillLabel)}"`,
    `data-skill-rank="${data.skillRank}"`,
    `data-proficiency-label="${data.proficiencyLabel}"`,
    `data-task-name="${foundry.utils.escapeHTML(data.taskName)}"`,
    `data-settlement-name="${foundry.utils.escapeHTML(data.settlementName)}"`,
    `data-task-level="${data.taskLevel}"`,
    `data-dc="${data.dc}"`,
    `data-matching-foci="${foundry.utils.escapeHTML(JSON.stringify(data.matchingFoci))}">`,
    `<h3>Pending Earn Income</h3>`,
    `<p><strong>Character:</strong> ${data.actorName}</p>`,
    `<p><strong>Skill:</strong> ${data.skillLabel} (${data.proficiencyLabel})</p>`,
    `<p><strong>Task Level:</strong> ${data.taskLevel}</p>`,
    `<p><strong>DC:</strong> ${data.dc}</p>`,
    `<p><em>Resolve any Hero Point rerolls first, then click Calculate Earn Income.</em></p>`,
    `<div class="downtime-pending-earned-income-actions"></div>`,
    `</div>`,
  ].join(' ');
}

export function renderEarnIncomeCard(data) {
  return [
    `<div class="downtime-earn-income-card"`,
    `data-actor-id="${data.actorId}"`,
    `data-daily-income-cp="${data.dailyIncomeCp}">`,
    `<h2>Earn Income</h2>`,
    `<p><strong>Character:</strong> ${data.actorName}</p>`,
    `<p><strong>Skill:</strong> ${data.skillLabel} (${data.proficiencyLabel})</p>`,
    `<p><strong>Task:</strong> ${data.taskName || 'Unnamed Task'}</p>`,
    `<p><strong>Settlement:</strong> ${data.settlementName || 'None'}</p>`,
    `<hr>`,
    `<p><strong>Task Level:</strong> ${data.taskLevel}</p>`,
    `<p><strong>DC:</strong> ${data.dc}</p>`,
    `<p><strong>Roll:</strong> ${data.die} + ${data.modifier} = <strong>${data.total}</strong></p>`,
    `<p><strong>Result:</strong> ${data.degree}</p>`,
    `<hr>`,
    `<p><strong>Daily Income:</strong> ${data.dailyIncomeText}</p>`,
    `<p><strong>Current Balance:</strong> ${data.balance}</p>`,
    `<p><strong>Matching Foci:</strong> ${data.matchingFociText}</p>`,
    `<div class="downtime-additional-days-row">`,
    `<label><strong>Additional Days Worked:</strong></label>`,
    `<input type="number" class="downtime-additional-days" value="0" min="0" max="364" />`,
    `</div>`,
    `<p class="downtime-total-preview">`,
    renderEarnIncomeTotalPreview({
      totalIncomeText: data.dailyIncomeText,
      totalDays: 1,
    }),
    `</p>`,
    `<button type="button" class="downtime-pay-earned-income">Pay Character</button>`,
    `</div>`,
  ].join('');
}

export function renderEarnIncomeTotalPreview({ totalIncomeText, totalDays }) {
  return `<strong>Total if paid now:</strong> ${totalIncomeText} (${totalDays} day${totalDays === 1 ? '' : 's'})`;
}

export function renderEarnIncomePaidPreview({ totalIncomeText, totalDays, newBalance }) {
  return [
    `<strong class="downtime-paid-label">Paid:</strong> ${totalIncomeText} (${totalDays} day${totalDays === 1 ? '' : 's'})`,
    `<br>`,
    `<strong>New Balance:</strong> ${newBalance}`,
  ].join('');
}
