import l10n from '../../../language'

const statuses = {
  operational: {
    name: "Operational",
    locName: l10n.components.operational,
    backgroundColor: "rgba(61, 167, 81, 0.1)",
  },
  performanceIssues: {
    name: "Performance Issues",
    locName: l10n.components.performanceIssues,
    backgroundColor: "rgba(73, 144, 226, 0.1)",
  },
  partialOutage: {
    name: "Partial Outage",
    locName: l10n.components.partialOutage,
    backgroundColor: "rgba(192, 138, 45, 0.1)",
  },
  majorOutage: {
    name: "Major Outage",
    locName: l10n.components.majorOutage,
    backgroundColor: "rgba(217, 68, 48, 0.1)",
  },
  maintenance: {
    name: "Maintenance",
    locName: l10n.components.maintenance,
    backgroundColor: "rgba(96, 96, 96, 0.1)",
  },
  unknown: {
    name: "Unknown",
    locName: l10n.components.unknown,
    backgroundColor: "rgba(177, 177, 177, 0.1)",
  },
};

export default statuses;
