import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'lucide-react';
import TechPill from './TechPill';

const getIcon = (name) => {
  const IconComp = Icons[name] || Icons.UserCircle2;
  return <IconComp className="h-4 w-4 text-cyan" aria-hidden="true" />;
};

const TalentRoleCard = ({ role, skills = [], available }) => {
  const visibleSkills = skills.slice(0, 3);
  const remaining = skills.length - visibleSkills.length;

  return (
    <article className="card-glow glass flex flex-col gap-3 rounded-xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-mid">
            {getIcon(role.includes('Engineer') ? 'Code2' : 'UserCog')}
          </div>
          <h3 className="font-display text-base font-semibold text-white">
            {role}
          </h3>
        </div>
        {available && (
          <span className="inline-flex items-center gap-1 rounded-full bg-mint/10 px-2.5 py-1 text-[11px] font-medium text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Available
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {visibleSkills.map((s) => (
          <TechPill key={s} label={s} />
        ))}
        {remaining > 0 && <TechPill label={`+${remaining} more`} />}
      </div>
    </article>
  );
};

TalentRoleCard.propTypes = {
  role: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
  available: PropTypes.bool,
};

export default TalentRoleCard;