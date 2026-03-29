import React from 'react';
import { RecentAppointmentsProps } from '@/types/dashboard';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { ArrowRightIcon, CalendarIcon } from '@/components/Icons';
import { getInitials } from '@/constants/navbar';
import {
  getAvatarStyle,
  getAvatarColor,
  getLifecycleBadge,
} from '@/utils/helper';

export default function RecentAppointments({
  appointments,
}: RecentAppointmentsProps) {
  return (
    <div className="db-table-card">
      {/* Header */}
      <div className="db-table-header">
        <div>
          <h2 className="db-table-title">Recent Appointments</h2>
          <p className="db-table-sub">
            Last {appointments.length} scheduled records
          </p>
        </div>

        <a href="/appointments" className="db-view-all-btn">
          View all <ArrowRightIcon />
        </a>
      </div>

      {/* Empty State */}
      {appointments.length === 0 ? (
        <div className="db-table-empty">
          <CalendarIcon />
          <p>No appointments found</p>
        </div>
      ) : (
        /* Table */
        <div className="db-table-wrapper">
          <Table>
            <TableHeader>
              <TableRow className="db-table-row-header">
                <TableHead className="db-th">Patient</TableHead>
                <TableHead className="db-th">Doctor</TableHead>
                <TableHead className="db-th">Date</TableHead>
                <TableHead className="db-th">Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {appointments.map((item) => (
                <TableRow key={item.id} className="db-table-row">
                  {/* Patient */}
                  <TableCell className="db-td">
                    <div className="db-person-cell">
                      <div
                        className="db-avatar"
                        style={getAvatarStyle(getAvatarColor(item.patientName))}
                      >
                        {getInitials(item.patientName)}
                      </div>

                      <span>{item.patientName}</span>
                    </div>
                  </TableCell>

                  {/* Doctor */}
                  <TableCell className="db-td">
                    <div className="db-person-cell">
                      <div
                        className="db-avatar db-avatar--outlined"
                        style={getAvatarStyle(getAvatarColor(item.doctorName))}
                      >
                        {getInitials(item.doctorName)}
                      </div>

                      <span>{item.doctorName}</span>
                    </div>
                  </TableCell>

                  {/* Date */}
                  <TableCell className="db-td db-td--muted">
                    {item.date
                      ? new Date(item.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })
                      : '—'}
                  </TableCell>

                  {/* Status */}
                  <TableCell className="db-td">
                    {getLifecycleBadge(item.lifecycle)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
